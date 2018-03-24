// Card Counting Function
var GlobalCount = 0;

function CardCount(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      GlobalCount++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      GlobalCount--;
      break;
  }
  if (GlobalCount > 0) {
    return count + " Bet";
  }
  else if (GlobalCount < 0) {
    return count + " Hold";
  }
  else (GlobalCount = 0); {
    return count + " Hold";
  }
}
// Add/remove card values to test. Only the last will display
CardCount(2); CardCount(3); CardCount(7); CardCount('K'); CardCount('A');