






//n - number of rows, s- occupied seats
`public int getAvailableSeats(int n, String s) {
  String str[] = s.split(" ");
  List<String> occupied = new ArrayList<>();
  int available = 0;

  occupied = Arrays.asList(str);

  for(int i = 1; i<= n ; i++) {

          if(!occupied.contains(i+"A") && !occupied.contains(i+"B") && !occupied.contains(i+"C")) {
              available++;
          }
          if(!(occupied.contains(i+"D") && occupied.contains(i+"G"))  && !(occupied.contains(i+"E") || occupied.contains(i+"F"))) {
              available++;
          }
          if(!occupied.contains(i+"H") && !occupied.contains(i+"J") && !occupied.contains(i+"K")) {
              available++;
          }
 }
  return available;
  }`




// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, S) {
  // write your code in JavaScript (Node.js 8.9.4)

  const occupied[] = S.split(' ')
  let available = 0

  for (let index = 0; index < N; index++) {
    const element = array[index];

  }

  return available
}
