from gtts import gTTS
import os

# Texto a ser convertido em forma de lista
words = [
    "Song",
    "The World",
    "Heart",
    "Skin",
    "Shoulder",
    "A fool",
    "The pain",
    "The movement",
    "The minute",
    "Then",
    "It",
    "He",
    "His",
    "His world",
    "You",
    "Then you",
    "Your",
    "Your heart",
    "Your skin",
    "Your shoulder",
    "Your shoulders",
    "Upon",
    "The world upon your shoulders",
    "Sad",
    "A sad song",
    "it's a fool"
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
        tts = gTTS(word, lang='en')
        
        # Define o nome do arquivo com base na palavra
        filename = os.path.join(output_dir, f"{word.replace(' ', '_').lower()}.mp3")
        
        # Salva o áudio em formato MP3
        tts.save(filename)
        print(f"Arquivo '{filename}' criado com sucesso!")
