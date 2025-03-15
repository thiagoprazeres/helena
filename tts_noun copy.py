from gtts import gTTS
import os

# Texto a ser convertido em forma de lista
words = [
    "Song",
    "Sad",
    "A sad song",
    "Take",
    "Take a sad song",
    "Heart",
    "Skin",
    "Then",
    "So",
    "Now",
    "Out",
    "In",
    "It",
    "You",
    "Her",
    "Your",
    "Me",
    "Then you",
    "Your heart",
    "Into",
    "Down",
    "Under",
    "Into your heart",
    "Me down",
    "Under your",
    "Bad",
    "Found",
    "It bad",
    "Better",
    "It batter",
    "Found her",
    "And",
    "Dont't",
    "To make",
    "Can",
    "Have",
    "Start",
    "Go",
    "Get",
    "Let",
    "Remember",
    "Begin",
    "Don't make",
    "Make better",
    "You have",
    "Can start",
    "Make it",
    "Then you can",
    "And make",
    "Letter",
    "Let out",
    "And let in",
    "Now go",
    "Get her",
    "Don't make it bad",
    "Don't let me down",
    "You have found her",
    "And make it better",
    "Now go and get her",
    "To letter into your heart",
    "To letter under your skin",
    "Then you can start",
    "To make it better",
    # "Don't make it bad. Take a sad song, and make it better. Remember. To letter into your heart. Then you can start, to make it better",
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
