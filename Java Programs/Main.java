
class Dog {

    void sound() {
        System.out.println("woof");
    }
}

class Beagle extends Dog {

    void bark() {
        System.out.println("arf arf");
    }
}

public class Main {

    public static void main(String[] args) {
        Beagle b = new Beagle();

        b.sound();
        b.bark();
    }
}
