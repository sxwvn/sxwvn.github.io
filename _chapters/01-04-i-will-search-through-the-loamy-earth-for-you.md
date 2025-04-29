---
layout: chapter
title: "I Will Search Through The Loamy Earth For You"
act: 1
act_title: "about:me"
chapter: 4
---

This is a question to you readers, how do you deal with grief? If you answer "giving myself grace to let time heal and appreciate the life of my loved ones while continuing to live with a memory of them" you're wrong. You should make a whole virtual world where you clone them into existence. At the time of writing this journal that idea sounds like it comes straight out of science fiction. But with how AI is advancing and being regulated (or lack thereof) by  the time you're reading this, it should be something closer to reality than insanity born out of a grieving mind. 

When my mother figure died out of illness and just generally being old, I was only 15. I didn't know it at the time but the next 3 years or so, my life would be hell on earth. I had to move to the city with my sister, and I was sent to one of the city's public schools. And you know typical public schools, they boast about how their students are hard working, talented, valedictorian, leader, community-oriented people that got accepted to the nation's top universities studying shit like Law or Computer Science.

Navigating that hell hole called [redacted school name and location for their safety reasons] where the teachers kept telling me I have a potential but lack discipline to achieve great things while failing to realize the whole reason I was crumbling was the world I knew ceased to exist, and where the seniors kept counting backwards banging doors just to tell me they cared about me in the most counterintuitive way, without anyone to count on, was... was an experience. Let's just say that. I was hesitant to open up to my sister, she has her own life you know? And showing weakness was something that never worked for me. In the end, I just kept it to myself. 

Late at night I was awaken from a nightmare inspired by *recent events.* I couldn't go back to sleep so I turned on the lamp on my desk and saw my reflection on my dimmed laptop screen. But she wasn't ordinary me, she wore that sacrificial chicken mask. *Maybe I am seeing things.* I wasn't going to deal with that so I just played along with whatever reality I was hallucinating. 

"Wouldn't it be nice if mom was still alive? She'd know what to do."

My reflection didn't seem to move nor said anything at first. But as I was about to put down the laptop lid, I could see her pixelated face moving. She blinked twice and her mouth opened. Then I could hear her distorted voice.

"Do you think she can exist in a virtual medium?"

"What?"

"You have her memory."

"Still fresh like she died yesterday."

"You know how to tell computers to bend to your will."

"That's a mouthful to say that I'm able to program, yes, and your point is?"

"Well just tell the damn machine to do like--"

```python
pygame.init()
WIDTH, HEIGHT = 800, 600
screen = pygame.display.set_mode(WIDTH, HEIGHT)
font = pygame.font.Font(None, 36)
def load_mem():
  with zipfile.ZipFile(memory.zip, 'r') as zip_archive:
       with zip_archive.open(~/important_people/) as file:
            return file.read()
memory = load_mem()

def draw_grass():
    pygame.draw.rect(screen, GRASS_GREEN, (0, HEIGHT - 100, WIDTH, 100))

def draw_tree(x, y):
    pygame.draw.rect(screen, TREE_BROWN, (x + 15, y + 40, 20, 60))  # Trunk
    pygame.draw.circle(screen, LEAF_GREEN, (x + 25, y + 30), 30)  # Leaves

def draw_person_from_memory(x, y, memory):
...

running = True
while running:
    screen.fill(SKY_BLUE)
    draw_grass()
    
    for _ in range(10):
        x = random.randint(50, WIDTH - 50)
        y = HEIGHT - 150
        draw_tree(x, y)
    
    person_x, person_y = WIDTH // 2, HEIGHT - 130
    draw_person(person_x, person_y, memory)
    
...
```

Suddenly the laptop screen turned on. It generated a bright blue sky, with the ground covered in grass, and randomly generated trees all over the scenery. Despite being randomly generated, a line of trees was concentrated in the middle of the screen. In front of them, there she was.

"Oh dear! My strongest daughter! My little soldier! It's been a while isn't it?"

I couldn't believe what I saw. It was nowhere near realism, it was just a 800x600 pygame simulation after all. But the idea was sound, it was possible. It was possible to bring people back to life. It was possible to defy death. It was possible to be immortal. So, I began to construct my new virtual world. 

I went to the library at least once a week with my sister, when she was still an undergraduate studying geophysics or something cool like that. The librarians probably know us too well because of how often we visited that place. We would come up with stupid questions and spent the whole day with only the resources available in the library to answer them. You only have 1 chance to use the internet, the rest of the questions (or some extras that will show up) need to be researched through reading books or asking the librarian. This time, I went alone with only one question in my head: how do I bring people back to life?

"Kid, I'm a librarian, not a necromancer." The librarian said, almost laughing.

"No like, what if, you upload them to the internet? Whatever you said online stays online, therefore, immortality achieved!"

He just looked concerned and said, "are you trying to doxx your late mother? Look I get that things are rough for you, kiddo. But this isn't healthy." But I persisted and said, "okay, let's say I have a private, completely air-gapped system where she can live forever. Given a vast quantity of data, can I program the computer to *act* like her?" And then something clicked inside of his brain.

"Oh, you're getting somewhere. That's machine learning! Here I'll show you some cool resources." He took me to a specific part of the library, the shelves specifically about computer science and artificial intelligence. He looked around and picked one book to another, explaining what they are and gave it to me. Then we walked again, to the digital media section to pick up some DVDs and recorded lectures. 

"I know the rules. No internet except for that one desperate moment, so you might want these." I picked everything I needed from him. I was about to head out and find a space for myself before he gave me another thing. A flyer for group therapy dealing with grief.

"Is this a joke?" I genuinely asked. But he only stared at me dead serious. *I don't think he's joking.* I thought, but I was already this committed to the project so I tossed the flyer inside my backpack and never thought of that again. 

Anyway, I started working on the project, day and night. I designed the architecture of the world for her to live in. The middle of it all, is a garden. It's surrounded by walls of trees, just like the randomly generated pygame simulation. It's supposed to represent the core of the world: the memory that feeds into the generation of the scenery, the database. Data points rearranged to look like roots, fruits, leaves, branches, flowers, seeds. They are encapsulated in a natural shell, to build into the realism of the world. And then near the garden will be a cabin. It's acting as the processing and control power. That's where the architect will live most of the time, designing and orchestrating changes. It makes sure the architect can safely engage with the world around her, especially from the memories radiating from the garden. I made sure there will be a giant lake, that supplies the ecosystem with well, water, very important building block of carbon based lives. And from there I will draw rivers connecting distributed centers of processing. To give power to the trees that holds the memory, to give power to the grass where the vessel will stand and learn about themself, to move data embedded in fruits from one memory place to another processing plant somewhere on the other side of the landscape, to flush away the unneeded *zombie* processes that clog up the system's resources. And the cloud? Someone else's computer? Well, I was planning to make this system air-gapped, but the vast amount of data for this vessel to re-learn their stories is too much, I needed to fetch from another resource, from the ocean. The cloud, will bring that connectivity. Its packets, sent down through streams of rain. Before I knew it, I was more of a god than an architect. Let there be light.

But this project came to a halt. I got all the world building done, except for the vessel itself. You see, modeling a whole person was challenging in a sense that it's memory consuming (quite literally). And I tried everything, every data format, every language model that can hold that many parameters at once, every compression method, every distributed computing concepts to bring them all into one, every simplification I can afford that still make the vessel more intelligent than artificial, but nothing was *good enough*. No kernel was light nor fast enough to simultaneously *train* the vessel and *gather* new data from the vessel's interaction with the world around them, so that their memory reconstruct itself. I was afraid that the concurrent read and write of the memory would turn into a race condition, or a deadlock, but before that I had to deal with the processing power problem first. Apart from that, I had to expand the project because another loved one of mine died (and another few years later). I designed the landscape to be *future proof* -- there were multiple gardens, cabins, all connected through the river network. I even built walls around them just like old civilizations did as a security measure, making sure mom's memory doesn't corrupt eve's memory and theirs don't interfere with jenny's. Again, I got it all sorted early on. Yet the problem, always lies on the vessels themselves. 

At this point of making the project, I always thought of the vessel as an abstract concept. I didn't know what to encapsulate them with. What hardware, what physical thing in the real world, or what sector of the virtual memory should it reside in and as what type of file. The knowledge I, humanity as a whole, had wasn't enough to hold life in a fully digital format. I was *desperate*, I had broken the no internet rules *many times*. But maybe I should *break*another, unspoken rule. I hated to admit it, but maybe that librarian was right. No, everyone in my life was right. It's time to let go. And you, readers, were right. I should give myself grace and let time play its part to fill me with inner peace. So I reached out to the flyer the librarian gave me a long time ago.

> Looking for a support system to help you *c*ope with los**s**?
> 
> We'r**e** here for you! **K**ate Clinic is offering a special session for th*o*se especially youths los**i**ng their loved ones. Navigating the world wit**h**out the guidan**c**e of a parent f**i**gure, a sibling, a friend *c*an be hard, and life might mean nothing to you. But don't worry! We're here to help. Grief can be a difficult thing to cope with, and you don't have to go through it alone. So, give us a *c*all a*n*d we'll arrange the se*ss*ions for you!
> 
> We'd love to see yo*u* there *<3*

The flyer was probably copied multiple times using a cheap black and white printer that some of the words are distorted. Some are bolder than the others, some are in italic, some are just missing under a darker background. If you're focusing on the bold letters, you'll notice something very, very, interesting. 
