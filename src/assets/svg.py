import os
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin

def download_images_from_page(page_url, save_path):
    try:
        # تحميل صفحة الويب
        response = requests.get(page_url)
        response.raise_for_status()  # التحقق من الأخطاء
    except requests.exceptions.RequestException as e:
        print(f"Failed to fetch the page: {e}")
        return

    soup = BeautifulSoup(response.text, 'html.parser')

    # استخراج جميع الروابط من الصفحة
    links = soup.find_all('a')
    image_links = [link['href'] for link in links if link['href'].endswith('.png')]

    # التأكد من وجود المجلد المحدد، وإذا لم يكن موجودًا فسيتم إنشاؤه
    if not os.path.exists(save_path):
        os.makedirs(save_path)

    # تحميل كل صورة وحفظها في المجلد
    for url in image_links:
        try:
            full_url = urljoin(page_url, url)  # تكوين الرابط الكامل
            image_response = requests.get(full_url)
            image_response.raise_for_status()  # التحقق من الأخطاء
            
            # الحصول على اسم الملف من الرابط
            file_name = os.path.basename(url)

            file_path = os.path.join(save_path, file_name)
            
            # حفظ الصورة في المسار المحدد
            with open(file_path, 'wb') as file:
                file.write(image_response.content)
            print(f"Downloaded: {file_path}")
        except requests.exceptions.RequestException as e:
            print(f"Failed to download {url}: {e}")

# الرابط الذي يحتوي على قائمة الروابط إلى صور SVG
page_url = 'https://wagon-coombe.ddns.net/wagon-ux/Mobile/wegonApp/Site_Images/'

# مسار الحفظ
save_path = r'C:\Users\mohamed.ibrahim\Desktop\New folder'

# تحميل الصور
download_images_from_page(page_url, save_path)
