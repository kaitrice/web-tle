import requests

ID = 1790610682
URL = f'https://itunes.apple.com/lookup?id={ID}&entity=album'


def get_apple_music():
    response = requests.get(URL)
    return response.json()
