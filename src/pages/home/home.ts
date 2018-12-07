import { Component } from "@angular/core";
import { NavController } from "ionic-angular";

@Component({
  selector: "page-home",
  templateUrl: "home.html"
})
export class HomePage {
  userSelect: string = "8ball";

  //for 8 ball
  isMoving: boolean = false;
  isShowAnswer: boolean = false;

  answer: string = "";
  
  answers: string[] = [
    "It is certain.",
    "It is decidedly so.",
    "Without a doubt.",
    "Yes, definitely.",
    "You may rely on it.",
    "As I see it, yes.",
    "Most likely.",
    "Outlook good.",
    "Yes.",
    "Signs point to yes.",
    "Reply hazy, try again.",
    "Ask again later.",
    "Better not tell you now.",
    "Cannot predict now.",
    "Concentrate and ask again.",
    "Don't count on it.",
    "My reply is no.",
    "My sources say no.",
    "Outlook not so good.",
    "Very doubtful."
  ];

  //for dice
  number: number = 1;
  isRolling: boolean = false;

  //for custom
  inputs: string= "";
  inputArray: string[] = [];
  output: string = "";
  isRandomizing: boolean = false;

  constructor(public navCtrl: NavController) {
      setInterval(() => {if(this.isRolling) this.rollDice()}, 100);
  }

  rollDice(){
    this.number = Math.floor(Math.random() * 6) + 1;
  }

  checkIfRolling(){
    this.isRolling = !this.isRolling;
  }

  move(event: boolean, action: string) {
    this.isMoving = event;

    if (!this.isMoving && action == "show-answer") {
      let index = Math.floor(Math.random() * 20) + 1;
      this.answer = this.answers[index];
      this.isShowAnswer = true;
    }

    if (!this.isMoving && action == "hide-answer") {
      this.isShowAnswer = false;
    }
  }

  randomize(){
    this.inputArray = this.inputs.split(",");
    let index = Math.floor(Math.random() * this.inputArray.length);
    this.output = this.inputArray[index];
  }

  addToList(event: string){
   this.inputs = event;
  }
}
