class App {
  static sleep(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });
  }

  static async sayHello(): Promise<string> {
    await this.sleep();

    console.log('hello');
    return 'hello';
  }

  static test = (): string => {
    return 'test';
  };
}

export default App;
