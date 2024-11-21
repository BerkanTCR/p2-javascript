let sod1c = ["Berkan", "Berkan2", "Berkan3", "Berkan4", "Berkan5"];

console.log (sod1c)

document.getElementById('kaas').innerText = sod1c[3]

sod1c[3] = "vervangende naam"
document.getElementById('kaas').innerText = sod1c[4]

document.getElementById('kaas').innerText = " er zitten " + sod1c.length + " mensen in mijn klas "