const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const userData = {}

console.clear()
console.log('\x1b[33m%s\x1b[0m',"              Hello! Please enter:        ")
console.log("================================================")

rl.question('Your full nume: ', (name) => {
  userData.name = name
  console.log("------------------------------------------------")

  rl.question('Your age: ', (age) => {
    userData.age = age
    console.log("------------------------------------------------")

    rl.question('Your sex [ M or W ]: ', (sex) => {
      userData.sex = sex

      let arr_syb = []

      arr_syb[0] = userData.name
      arr_syb[1] = parseInt(userData.age)
      arr_syb[2] = userData.sex

      let User_ME =
      {
        Name_U : arr_syb[0],
        Age : arr_syb[1],
        Sex : arr_syb[2],
        Time_To_Finish : NaN,
        Attempt_To_Finish : NaN,
        LevelOfCool : 6 / 0
      }
      console.clear()

      setTimeout(() => {

        console.clear()
        process.stdout.write("\u001b[?25h")

        function displayMenu() 
        {
          console.log("================================================")
          console.log('\x1b[33m%s\x1b[0m',"               Command`s MENU:")
          console.log("------------------------------------------------")
          console.log("> [ MI ] - My Info")
          console.log("> [ GL ] - Gamer`s List")
          console.log('\x1b[34m%s\x1b[0m',"> Game`s List:")
          console.log('\x1b[36m%s\x1b[0m',"==> [ G1 ] - Decription game")
          console.log('\x1b[36m%s\x1b[0m',"==> [ G2 ] - Guess the number")
          console.log("> [ E ] - Exit")
          console.log("================================================")
        }
  
        function MyInfo() 
        {
          console.log('\x1b[33m%s\x1b[0m',"User Data:")
          console.log("")
          console.table({User_ME})
          returnToMenu()
        }
  
        function GamersList() 
        {
          console.log('\x1b[33m%s\x1b[0m',"Gamer`s List:")
          console.log("")
          console.table({User_ME})
  
          let User_JE = 
          {
            Name_U : "John Einstein",
            Age : 67,
            Sex : "M",
            Time_To_Finish : 10.79 + " sec.",
            Attempt_To_Finish : parseInt("1")
          }
          console.table({User_JE})
  
          let User_AT = 
          {
            Name_U : "Albert Turing",
            Age : 14,
            Sex : "M",
            Time_To_Finish : 3.14 + " sec.",
            Attempt_To_Finish : parseInt("3")
          }
          console.table({User_AT})
  
          let User_AN = 
          {
            Name_U : "Alan Nash",
            Age : 68,
            Sex : "M",
            Time_To_Finish : 3.29 + " sec.",
            Attempt_To_Finish : parseInt("4")
          }
          console.table({User_AN})
  
          returnToMenu()
        }
  
        async function DecriptionGame() 
        {
          let startTime
          startTime = new Date()

          let arr_word = ["Hello World",
          "Genius is one percent inspiration and ninety-nine percent perspiration",
          "Imagination is more important than knowledge",
          "I made the American dream of people come true",
          "The present is theirs; the future, for which I really worked, is mine"]

          const randomIndex = Math.floor(Math.random() * 5)
          const randomWord = arr_word[randomIndex]
  
          const randomNum = Math.floor(Math.random() * 3) + 1
          const mathProblem = generateMathProblem(randomNum)
  
          const plaintext = randomWord
          const shiftAmount = randomNum

          const encryptedText = caesarCipher(plaintext, shiftAmount)
  
          console.log('\x1b[33m%s\x1b[0m',"This is a logic game in which YOU must decipher")                   
          console.log('\x1b[33m%s\x1b[0m',"a secret message that has been encrypted using")
          console.log('\x1b[33m%s\x1b[0m',"the Caesar cipher. Time is ticking.")
          console.log("")

          console.log('\x1b[35m%s\x1b[0m',"Decryption key:", mathProblem)
          console.log("")
          console.log("Encrypted text:", encryptedText)
  
          console.log('\x1b[32m%s\x1b[0m',"-----------------------------------------------------")
          console.log('\x1b[32m%s\x1b[0m',"| A | B | C | D | E | F | G | H | I | J | K | L | M |")
          console.log('\x1b[32m%s\x1b[0m',"-----------------------------------------------------")
          console.log('\x1b[32m%s\x1b[0m',"| N | O | P | Q | R | S | T | U | V | W | X | Y | Z |")
          console.log('\x1b[32m%s\x1b[0m',"-----------------------------------------------------")
  
          const result = await new Promise((resolve) => {
            rl.question('Decryption result: ', (userResult) => {
              resolve(userResult)
            })
          })
        
          if (result === plaintext) {
            console.log(`Well Done, ${userData.name}`)
            const endTime = new Date()
            const elapsedTime = endTime - startTime
            User_ME.Time_To_Finish = elapsedTime / 1000 + " sec."
        
            console.log('\x1b[32m%s\x1b[0m',`Time to finished: ${elapsedTime / 1000} sec.`)
          } else {
            console.log('\x1b[32m%s\x1b[0m',`Don't worry, It will succeed next time ${userData.name}`)
          }
          returnToMenu()

          function caesarCipher(text, shift) 
          {
            let result = ''
  
            for (let i = 0; i < text.length; i++) 
            {
              let char = text[i]
  
              if (/[a-zA-Z]/.test(char)) 
              {
                const isUpperCase = char === char.toUpperCase()
                const alphabet = isUpperCase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : 'abcdefghijklmnopqrstuvwxyz'
                const charIndex = alphabet.indexOf(char)
                const shiftedIndex = (charIndex + shift) % alphabet.length
                const shiftedChar = alphabet.charAt(shiftedIndex)
                result += isUpperCase ? shiftedChar : shiftedChar.toLowerCase()
              } 
              else 
              {
                result += char
              }
            }
  
            return result
          }
  
          function generateMathProblem(targetNumber) {
            let num1, num2, operator, result
            
            num1 = Math.floor(Math.random() * 10) + 1
            num2 = Math.floor(Math.random() * 10) + 1
            const operators = ['+', '-', '*', '/']
            operator = operators[Math.floor(Math.random() * operators.length)]
          
            switch (operator) {
              case '+':
                result = num1 + num2
                break
              case '-':
                result = num1 - num2
                break
              case '*':
                result = num1 * num2
                break
              case '/':
                if (num2 !== 0) {
                  result = num1 / num2
                } else {
                  return generateMathProblem(targetNumber)
                }
                break
            }
          
            if (result === targetNumber) {
              return `${num1} ${operator} ${num2}`
            } 
            else 
            {
              return generateMathProblem(targetNumber)
            }
          }
        }
  
        function GuessTheNumber() 
        {
          const targetNum = Math.floor(Math.random() * 100) + 1
          let attempts = 0
  
          function startGame() 
          {
            console.log('\x1b[33m%s\x1b[0m','Welcome to the game "Guess the number!"')
            console.log('\x1b[33m%s\x1b[0m','Try to guess the number from 1 to 100')
            console.log(' ')
  
            playGame()
          }
  
          function playGame() 
          {
            attempts++;
            rl.question('Your guess: ', (userGuess) => 
            {
              const guess = parseInt(userGuess)
  
              if (isNaN(guess)) 
              {
                console.log('\x1b[31m%s\x1b[0m','>> ERROR: Please, enter a number.')
                playGame()
              }
              else if (guess < targetNum)  
              {
                console.log('\x1b[34m%s\x1b[0m','> The secret number is greater.')
                playGame()
              } 
              else if (guess > targetNum) 
              {
                console.log('\x1b[31m%s\x1b[0m','> The secret number is smaller.')
                playGame()
              } 
              else 
              {
                console.log('')
                console.log('\x1b[32m%s\x1b[0m',`Congratulations! You guessed the number ${targetNum} in ${attempts} attempt(s)!`)
                User_ME.Attempt_To_Finish = attempts
                returnToMenu()
              }
            })
          }
          startGame()
        }
  
        function returnToMenu() 
        {
          rl.question('Press Enter to return to the MENU...', () => {
          console.clear()
          displayMenu()
          selectOption()
          })
        }
  
        function selectOption() 
        {
          rl.question('Select command: ', (choice) => {
          switch (choice) 
          {
            case 'MI':
              console.clear()
              MyInfo()
              break
  
            case 'GL':
              console.clear()
              GamersList()
              break
  
            case 'G1':
              console.clear()
              DecriptionGame()
              break
  
            case 'G2':
              console.clear()
              GuessTheNumber()
              break
  
            case 'E':
              console.log('\x1b[35m%s\x1b[0m','Exit process...')
              rl.close()
              break
  
            default:
              console.log('\x1b[31m%s\x1b[0m', 'ERROR: Command not found. Try again')
              selectOption()
          }
          })
        }
        displayMenu()
        selectOption()
      }, 2000)

      console.clear()
      console.log('\x1b[33m%s\x1b[0m'," Welcome to:")  
      console.log('\x1b[32m%s\x1b[0m',"      ___  _______          _______  _______ ")
      console.log('\x1b[32m%s\x1b[0m',"     |   ||       |        |       ||       |")
      console.log('\x1b[32m%s\x1b[0m',"     |   ||  _____|        |   _   ||  _____|")
      console.log('\x1b[32m%s\x1b[0m',"     |   || |_____         |  | |  || |_____ ")
      console.log('\x1b[32m%s\x1b[0m',"  ___|   ||_____  |        |  |_|  ||_____  |")
      console.log('\x1b[32m%s\x1b[0m'," |       | _____| | _____  |       | _____| |")
      console.log('\x1b[32m%s\x1b[0m'," |_______||_______||_____| |_______||_______|")
      console.log(" ")
      console.log("Waiting 3 sec....")
      process.stdout.write("\u001b[?25l")
    })
  })
})