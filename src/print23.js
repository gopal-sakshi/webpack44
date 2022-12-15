export default function printMe() {
    console.log('I get called from print.js!');
    // cosnole.log('I get called from print.js!');         // deliberately changed console spelling for source--map error
                                                        // we want to know ---> error came from index.js (or) module1.js (oR) print23.js
                                                        // make sure, you only generate one bundle.js in dist folder
                                                        // but still webpack will tell us that error came from print23.js
}