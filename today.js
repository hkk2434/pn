const puppeteer = require("puppeteer");
const screpFunction = async (url) => {
    try {


        const AllLinks = async () => {

            const browser = await puppeteer.launch(
                {

                    // headless: false,
                    slowMo: 50,
                    // devtools: true,
                    defaultViewport: false


                }
            );
            const page = await browser.newPage();

            await page.goto('https://www.tiava.com/category/indian-girlfriend/');


            const agreeBtn = await page.waitForXPath('//*[@id="splash-page"]/div/div/div/div[3]/button')

            await agreeBtn.click()


            const imgUrl = await page.$$eval('.card-container.sub img', allsrc => allsrc.map(a => a.getAttribute('src')))
            // console.log();

            const AllLinks = await page.$$eval('.card .card-img a', allsrc => allsrc.map(links => links.href))
            // console.log(Alllinks);


            const AllTitle = await page.$$eval(' div.card-title-container > h6 > span > span', allsrc => allsrc.map(titel => titel.textContent.replace(/\s\s+/g, '')))
            // console.log(AllTitle);


            const realData = [];



            var armixed = imgUrl.map(function (x, i) { 
                return { imgUrl: x, titel: AllTitle[i] } 
                                  });
            // realData.push(imgUrl, AllLinks)
            console.log(armixed);



            const duration = await page.$$eval(' div.ratio.ratio-16x9.embed-responsive > span.img-info > span', allsrc => allsrc.map(titel => titel.textContent.replace(/\s\s+/g, '')))
            // console.log(duration);


            // browser.close()
            // return all

        }

        // const returnAllLinks = await

        AllLinks();


        // console.log(Array.isArray(returnAllLinks));

        const onePageData = async (url) => {

            const browser = await puppeteer.launch(
                {

                    headless: false,
                    slowMo: 50,
                    // devtools: true,
                    defaultViewport: false


                }
            );
            const page = await browser.newPage();

            await page.goto(url);



            // const title = await page.$eval(".product_main h1", h1 => h1.textContent());

            const productName = await page.$eval('.product_main h1', heading => heading.textContent)
            const price = await page.$eval('.price_color', price => price.textContent)
            const img = await page.$eval('.item.active img', imgUrl => imgUrl.getAttribute('src'))

            browser.close()
            return {
                productName,
                price,
                img
            }

        }

        // let result

        // returnAllLinks.map(async (element) => {


        //     return result = await onePageData(element)
        // }

        // )

        // const recivedData = await onePageData('https://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html');
        // console.log(result)

        // await browser.close();
    } catch (error) {
        console.log(error);
    }



};

screpFunction()




