#!/usr/bin/env node

const enquirer = require('enquirer');
const chalk = require('chalk');
const path = require('path');
const generator = require('./src/generator');
const didyoumean = require('didyoumean')

const [FileName, ...args] = process.argv.slice(1);

async function CommandLine(){
    if(args.length === 0){
        await console.log('\nUsage: command-generator <command>\n\ncommand-generator --new               Generate A New Command line interface Project\ncommand-generator --help <command>    if You Need Help About Command Just do this Method.\n\nCommand Examples:\n\n   command-generator --new\n   command-generator --help new\n\n\nNote: The "--new" Command Will generate Command Line Project in the directory of the CMD Prompt\n')
    }else{
        const [cmdName, ...options] = args;
        const command = cmdName.toLowerCase();

        const list = ['--help', '--new'];

        const res = didyoumean(command, list);

        if(!command.startsWith('--')) return console.log('\n' + chalk.hex('#FF0000')('Command not Found!') + ' do ' + chalk.greenBright('command-generator --help') + ' For More Info!\n')
        if(!res) return console.log('\n' + chalk.hex('#FF0000')('Command not Found!') + ' do ' + chalk.greenBright('command-generator --help') + ' For More Info!\n')
        if(!(command === '--help' || command === '--new')) return console.log(`\n` + chalk.hex('#FF0000')('Command not Found!') + ' \nDid you Mean ' + chalk.greenBright(res) + '?');

        if(command === '--help'){
            const cmdopt = options[0]

            if(!cmdopt){
                await console.log('\nUsage: command-generator <command>\ncommand-generator --new               Generate A New Command line interface Project\ncommand-generator --help <command>    if You Need Help About Command Just do this Method.\n\nCommand Examples:\n\n   command-generator --new\n   command-generator --help new\n\n\nNote: The "--new" Command Will generate Command Line Project in the directory of the CMD Prompt\n')
            }else{
                if(cmdopt.toLowerCase() === 'new'){
                    await console.log('\nCommand Name: new\nAliases: -\nCommand Description: generates a Command line Interface Project\n\nThe Command "--new" Is A Command Where You Can Generate Your CLI Projects!\n\nExample: command-generator --new\n')
                }
            }
        }
        if(command === '--new'){

        }
    }
}

CommandLine();