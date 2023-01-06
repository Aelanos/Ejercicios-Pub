import { multiplica , suma } from "./controller.js"
import chalk from 'chalk';


const multiplicaSuma = multiplica(suma(1, 2), suma(4,5))
console.log(multiplicaSuma);

console.log(chalk.green(multiplicaSuma));
