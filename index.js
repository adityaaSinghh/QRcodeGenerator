import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
      {
        message: "enter the URL : ",
        name:'url'
      }
  ])
  .then((answers) => {
    const site =answers.url;
    
    var qr_svg = qr.image(site );
    qr_svg.pipe(fs.createWriteStream("qr_img.png"));
     
    fs.appendFile('urltext.txt', (site + "\n") , function (err) {
    if (err) throw err;
    console.log('Saved!');
    });

    
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });



