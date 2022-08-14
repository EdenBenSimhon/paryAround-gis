import csv
import requests

input_files = ["sfarad","ashkenaz"]
api_url = 'https://maps.googleapis.com/maps/api/geocode/json'

headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36',
}

## Work on data from scraping
for f in input_files:
    print(f'Getting {f}')
    with open(f'MidProcessCSV/{f}_auto.csv','r') as csv_file:
        data = csv_file.readlines()


    with open(f'ReadyForQGIS/{f}_with_coordinates.csv','w',encoding='UTF8') as new_csv:
        writer = csv.writer(new_csv,lineterminator='\n')
        writer.writerow(["City","Name","Nosah","Address","Latitude","Longitude","Navigate"])

        for beit in data[1:]:
            if beit != '"\n':
                beit = beit.replace(u'\xa0', u' ')
                beit = beit.replace('"', '')
                street = beit.split(',')[3] + ' ,' + beit.split(',')[0]
                params = {
                    'address': str(street),
                    'key': 'ThisIsNotTheRealAPIKey', 
                    'sensor': 'true'
                }
                res = requests.get(api_url, params=params, headers=headers)
                if len(res.json()['results']) != 0:
                    container = res.json()['results'][0]['geometry']['location']
                    latitude = container['lat']
                    longitude = container['lng']
                    wazeLink = f"https://www.waze.com/live-map/directions?navigate=yes&to=ll.{latitude}%2C{longitude}"
                    print("Latitude = {}, Longitude = {}".format(latitude, longitude))
                    to_write = [beit.split(',')[0],beit.split(',')[1],beit.split(',')[2],beit.split(',')[3],latitude,longitude,wazeLink]
                    writer.writerow(to_write)

## Work on data exported from QGIS
ReligionsToGet = ["muslim_sunni","muslim_shia","christian_catholic","christian_orthodox"]
with open('qgis_export.csv','r') as csv_file:
    data = csv_file.readlines()


for religion in ReligionsToGet:
    with open(f'ReadyForQGIS/{religion}_with_coordinates.csv','w',encoding='UTF8') as new_csv:
        writer = csv.writer(new_csv,lineterminator='\n')
        writer.writerow(["Name","Latitude","Longitude","Navigate"])
        for row in data[1:]:
            row = row.split(',')
            if religion == row[4]:
                longitude = row[0]
                latitude = row[1]
                wazeLink = f"https://www.waze.com/live-map/directions?navigate=yes&to=ll.{latitude}%2C{longitude}"
                print("Latitude = {}, Longitude = {}".format(latitude, longitude))
                to_write = [row[5],latitude,longitude,wazeLink]
                writer.writerow(to_write)
    print('Continuing...')

