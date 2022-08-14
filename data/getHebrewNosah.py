import csv


with open('Pray_Around/batei.csv','r') as csv_file:
    data = csv_file.readlines()


sfarad = []
ashkenaz = []

for row in data:
    if ('ספרד' in row.split(',')[2] or 'מזרח' in row.split(',')[2] or 'תימן' in row.split(',')[2]
    or 'מרוק' in row.split(',')[2] or 'לוב' in row.split(',')[2] or 'תוניס' in row.split(',')[2]):
        sfarad.append(row)
    else:
        ashkenaz.append(row)


with open('Pray_Around/MidProcessCSV/sfarad_auto.csv','w',encoding='UTF8') as new_csv:
    writer = csv.writer(new_csv)
    writer.writerow(["City","Name","Nosah","Address"])
    for row in sfarad:
        row = row.replace('"','')
        writer.writerow(row.split(','))

with open('Pray_Around/MidProcessCSV/ashkenaz_auto.csv','w',encoding='UTF8') as new_csv:
    writer = csv.writer(new_csv)
    writer.writerow(["City","Name","Nosah","Address"])
    for row in ashkenaz:
        row = row.replace('"','')
        writer.writerow(row.split(','))