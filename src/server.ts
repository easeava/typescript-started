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

  static test = (): Test => {
    return {
      msg: 'test info',
    };
  };
}

export default App;
