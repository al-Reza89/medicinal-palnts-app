from PIL import Image
import PIL
import os
import glob

base_width = 360
output_directory = 'assets/images'
if not os.path.exists(output_directory):
    os.makedirs(output_directory)
input_directory = 'assets/trees'

for filename in glob.glob(os.path.join(input_directory, '*.jpg')):
    image = Image.open(filename)
    
    # Convert RGBA image to RGB mode if necessary
    if image.mode == 'RGBA':
        image = image.convert('RGB')

    width_percent = (base_width / float(image.size[0]))
    hsize = int((float(image.size[1]) * float(width_percent)))
    resized_image = image.resize((base_width, hsize), PIL.Image.ANTIALIAS)
    output_filename = os.path.join(output_directory, os.path.basename(filename))

    # Check if the output file already exists, delete it if it does
    if os.path.exists(output_filename):
        os.remove(output_filename)

    # Control the quality of the saved JPEG image (0-100)
    resized_image.save(output_filename, quality=90)  # Adjust quality as per your requirement
    print(f"Resized and saved {output_filename}")

print("All images resized and saved.")
