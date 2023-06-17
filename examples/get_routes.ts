import Client from './../src/Client';

async function main() {
    // @TODO set correct client credentials
    let client = new Client(
        'http://127.0.0.1/projects/fusio/public/index.php',
        'test',
        'test1234'
    );

    let response = await client.backend().operation().getAll();
    if (!response.entry) {
        return;
    }

    response.entry.map((entry) => {
        console.log(entry.httpPath + "\n");
    });
}

main();
