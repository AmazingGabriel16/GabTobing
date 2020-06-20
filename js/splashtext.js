// Note: This will be called splashtext.js on GitHub. Local version is splashtextArrayStyle.js.

Array array[] = new String[
    "F=ma",
    "Gabriel was here!",
    "In the shadows.",
    "Without a doubt",
    "RUN!!!",
    "Jumping higher than high",
    "y=mx+c or was it b?",
    "Rocket goes vroom!",
    "Wendy's are great.",
    "That will be $9.99.",
    "Objects in water are closer than they appear.",
    "Never trust the girl with blue hair and blue eyes.",
    "Sometimes trust the girl with a strand of blue hair and blue eyes.",
    "Always trust the redhead girl with blue eyes.",
    "Chopping away at the code.",
    "Can't wait for Cyberpunk 2077... in the year 2077.",
    "The internet is internety",
    "They say a man loves pie, because MAH PIE!!!",
    "It was no accident.",
    "Beta Labs is watching.",
    "Alyn loves the snow.",
    "Brought to you by Neuro-Tech.",
    "Test subject #144.",
    "The Immovable Machine.",
    "SAY YES!!!",
    "SAY NO!!!",
    "Today is cold.",
    "A man blind is a man saved.",
    "The robots... are coming...",
    "1999 - Before the martians attacked.",
]

var num=Math.round(Math.random() * array.length);
document.getElementById("tagline").innerHTML = array[num];