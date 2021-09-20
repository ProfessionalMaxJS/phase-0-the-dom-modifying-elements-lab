// Write your code here!

main.remove();
//no longer has DOM node 'main#main'

const newHeader = document.createElement("h1");
newHeader.id = "victory";
newHeader.textContent = "MAX is the champion";
//has a 'newHeader' variable that points to node 'h1#victory' with "YOUR-NAME is the champion" inside

document.head.append(newHeader);
