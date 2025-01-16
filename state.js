export default class State {
    /**
     * 
     * @param {Function} run - the funcrion to run
     */
     constructor (run, background = undefined) {
        if (background !== undefined) {
            this.run = () => {
                image(background, 0, 0);
                run();
            }
        } else {
            this.run = run;
        }
        this.background = background;
     }
  }