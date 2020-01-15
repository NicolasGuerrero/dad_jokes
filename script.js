$(function (){
  async function getDadJoke() {
    let jokeObj = await axios.get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "text/plain"
      }
    });
    console.log(jokeObj.data)
    return jokeObj.data;
  };
  
  async function displayDadJokes() {
    for(let i = 1; i <= 10; i++) {
      let dadJoke = await getDadJoke();
      let jokeDiv = `<div id=joke${i}>${dadJoke}</div>`;
      $(".container").append(jokeDiv);
    }
  }
  displayDadJokes();
});