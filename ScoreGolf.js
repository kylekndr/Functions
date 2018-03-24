// Golf Score Tracker
function ScoreGolf(par, strokes) {
  if (strokes === 1){
    return "It's A Hole-In-One!";
  }
    else if (strokes <= par - 2){
      return "Eagle";
  }
    else if (strokes == par - 1){
      return "Birdie";
  }
    else if (strokes == par){
      return "Par";
  }
    else if (strokes == par + 1){
      return "Bogey";
  }
    else if (strokes == par + 2){
      return "Double Bogey";
  }
    else if (strokes >= par + 3){
      return "For Shame!";
  }
}

// Change par and stroke values to test:
ScoreGolf(4, 3);