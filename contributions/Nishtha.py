
import random
import time
def coding_journey():
    adventures = [
        "solving mind-bending problems ",
        "building apps that people actually use",
        "turning coffee into code",
        "learning something new every single day",
        "creating magic with algorithms",
        "debugging like a detective"
    ]
    print("Why I became a developer? Let me show you...\n")
    for i in range(3):
        print("Thinking...", end="")
        for _ in range(3):
            print(".", end="", flush=True)
            time.sleep(0.5)
        print(f"\nAdventure {i+1}: {random.choice(adventures)}\n")
        time.sleep(1)
    print("Because coding is my playground and passion!!!")
if __name__ == "__main__":
    coding_journey()
