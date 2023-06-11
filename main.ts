async function step1() {
    console.log("Do the first step")
    await prompt("Press Enter to continue...")
}

async function step2() {
    console.log("Do the second step")
    await prompt("Press Enter to continue...")

}

async function step3() {
    console.log("Do the third step")
    await prompt("Press Enter to continue...")
}

async function main() {
    const procedure = [
        step1,
        step2,
        step3
    ]

    await prompt("Press Enter to begin")

    procedure.forEach(step => step())

    console.log("All steps completed")
    await prompt("Press Enter to exit")
}

main()