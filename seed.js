
const collections=require('./models/collection');
const db=require('./config/database')
const seedCollections=async()=>{
    await db();
    const collection=new collections({
            name:"san pham 1",
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_P0fY4XqLdo0Xps3nztYrHHryDLNJAFnLg&s",
            description:"ao thun nam",
    })
    try{
        await collection.save();
        console.log('Sample Collections saved to database.');
    }
    catch(err){
        console.log('cant create ')
    }
}
seedCollections();