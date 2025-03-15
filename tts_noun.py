from gtts import gTTS
import os

# Texto a ser convertido em forma de lista
words = [
    # "Heart",
    # "Your",
    # "Your heart",
    # "Into",
    # "Into your heart",
    # "You",
    # "Have",
    # "You have",
    # "Found",
    # "Her",
    # "Found her",
    # "You have found her",
    # "Song",
    # "Sad",
    # "A sad song",
    # "Take",
    # "Take a sad song",
    # "Skin",
    # "Your skin",
    # "Under",
    # "Under your skin",
    # "Let",
    # "You letter",
    # "You letter into your heart",
    # "You letter under your skin",
    "Remember to",
    "The minute",
    "Remember to let her into your heart",
    "The minute you let her under your skin",
    # #"Take a sad song. You have found her. You letter into your heart. You letter under your skin",
    # "Don't make it bad",
    # "Afraid",
    # "Don't be afraid",
    # "Refrain",
    # "Begin",
    "You'll do",
    "Don't make it bad. Don't be afraid. Refrain. Begin. You'll do"
]

# Cria a pasta 'src/assets/audio/' caso não exista
output_dir = 'src/assets/audio'
if not os.path.exists(output_dir):
    os.makedirs(output_dir)

# Cria um arquivo MP3 para cada palavra/frase
for word in words:
    word = word.strip()  # Remove espaços extras

    if word:  # Verifica se a palavra não está vazia
        # Cria o objeto gTTS definindo a língua como 'en' para inglês
        # tts = gTTS(word, lang='en', slow=False)
        tts = gTTS(word, lang='en', tld='co.uk', slow=False)
        
        # Define o nome do arquivo com base na palavra
        filename = os.path.join(output_dir, f"{word.replace(' ', '_').lower()}.mp3")
        
        # Salva o áudio em formato MP3
        tts.save(filename)
        print(f"Arquivo '{filename}' criado com sucesso!")
