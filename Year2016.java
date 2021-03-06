public class Year2016 {
	public static String solution(int a, int b) {
				int[] month = { 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 };
      	int sum = 0;
      	int day;
      	String answer = "";

		for (int i = 1; i < a; i++) {
			sum += month[i-1];
		}
		sum += b;

		day = sum % 7;
		switch (day) {
			case 1:
				answer = "FRI";
				break;
			case 2:
				answer = "SAT";
				break;
			case 3:
				answer = "SUN";
				break;
			case 4:
				answer = "MON";
				break;
			case 5:
				answer = "TUE";
				break;
			case 6:
				answer = "WED";
				break;
			default:
				answer = "THU";
		}

		return answer;
  	}

	public static void main(String[] args) {
		int a, b;
		String result = "";
		
		a = 5;
		b = 24;
		result = solution(a, b);
		System.out.println(result);
	}
}
