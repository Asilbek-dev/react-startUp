const emojies = ["👍🏻", "😊", "😗", "❤️", "👋🏻", "😞", "👨‍👩‍👦", "🤔", "😡", "🧑🏼‍💻"];
const randomEmoji = () =>{
    const index = floor(random() * emojies.length);
    console.log(index)
    return emojies[index];
}
const listNewEmoji = new Arry(10).Fill.map(()=> randomEmoji());
console.log(listNewEmoji);
