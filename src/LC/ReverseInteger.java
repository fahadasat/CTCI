package LC;

class ReverseInteger {
    public int reverse(int x) {

        int result = 0;

        while (x != 0) {

            int lastDigit = x % 10;
            int tempResult = result * 10 + lastDigit;

            if ((tempResult - lastDigit) / 10 != result) {
                return 0;
            }
            result = tempResult;

            x = x / 10;
        }
        return result;
    }
}