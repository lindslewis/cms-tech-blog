const sequelize = require('../config/connection');

const { User, Comment, blogPost } = require('../models');

const users = [
    {
        username:"lindsherculean",
        email:"linds69@hotmail.com",
        password:"password"
    },
    {
        username:"pickleboi",
        email:"pickles4lyfe@veg.com",
        password:"picklerick"
    }
]

const posts = [
    {
        post_name: "Top Ten NPM Packages You May Not Know About",
        post_content: "I'm baby vHS butcher try-hard scenester poke sustainable lo-fi. Squid locavore tilde, try-hard vape cray offal selfies. Fanny pack keytar hell of, pork belly gluten-free tote bag forage letterpress slow-carb. Irony banh mi austin, truffaut brunch four dollar toast tilde beard small batch umami pop-up. Master cleanse keytar next level cray hoodie +1 banjo organic crucifix brooklyn health goth. Tumblr plaid portland literally, roof party hella cloud bread vegan. Pok pok pitchfork brunch, jianbing hot chicken copper mug pork belly cray coloring book chambray tattooed vexillologist letterpress hashtag.You probably haven't heard of them single-origin coffee schlitz DSA pug narwhal asymmetrical, la croix swag. Readymade vape tilde, aesthetic meh freegan pour-over chartreuse knausgaard asymmetrical. Pok pok yuccie seitan, vaporware viral hella art party master cleanse cardigan retro marfa. Af selvage tilde, ennui whatever kombucha DSA organic yr. Kinfolk pabst heirloom activated charcoal fashion axe mlkshk vaporware cray scenester man bun. Cronut YOLO brunch, DSA sriracha photo booth raclette la croix. Gentrify jean shorts lo-fi, ennui marfa tbh plaid pug.",
        user_id: 1,
    },
    {
        post_name: "Why Web API's are Going Out of Style: A Rant",
        post_content: "Lyft hexagon kale chips enamel pin PBR&B subway tile mixtape gentrify chartreuse freegan forage af. Skateboard tbh bushwick gentrify semiotics everyday carry. Activated charcoal offal pug asymmetrical. Deep v tilde squid shaman, typewriter gentrify DSA asymmetrical literally mustache affogato migas meh poke fixie. Schlitz fam irony mumblecore hammock green juice synth mlkshk poutine. Post-ironic retro etsy tousled, everyday carry chambray chicharrones brunch wolf poke fixie woke twee meh. Pitchfork lyft copper mug cronut lomo selfies intelligentsia listicle.",
        user_id: 1,
    },
    {
        post_name: "Why Aren't There More Websites about Pickles?",
        post_content: "Hot chicken hella hashtag ugh adaptogen, XOXO next level raw denim stumptown normcore franzen tumeric knausgaard. Shoreditch ethical asymmetrical truffaut gluten-free, praxis man bun +1 disrupt next level skateboard activated charcoal PBR&B. Direct trade chartreuse kogi letterpress hot chicken fixie lomo chicharrones blue bottle narwhal 3 wolf moon. Truffaut flexitarian stumptown, fingerstache ennui biodiesel listicle taxidermy af pug direct trade.",
        user_id: 2,
    },      
]

const seedIt = async () => {
    await sequelize.synch({force:true});
    await User.bulkCreate(users,{individualHooks:true});
    await blogPost.bulkCreate(posts);
    process.exit(0)
}

seedIt()