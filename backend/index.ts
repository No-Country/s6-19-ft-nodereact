import express from "express";
import cors from "cors";
import "dotenv/config.js";
import authRouter from "./routes/auth.route";
import userRouter from "./routes/user.route";
import cartRouter from "./routes/cart.route";
import productRouter from "./routes/product.route";
import paymentRouter from "./routes/payment.route";
import reviewRouter from "./routes/review.route";
import connectDataBase from "./config/mongoDB";
import fileUpload from "express-fileupload";
import Product from "./models/product.model";

connectDataBase();

const app = express();

const PORT = process.env.PORT || 5000;

// Middlewares

app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(express.json());
app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
    createParentPath: true,
  })
);

// Routes

app.use("/api/auth", authRouter);

app.use("/api/user", userRouter);

app.use("/api/cart", cartRouter);

app.use("/api/products", productRouter);

app.use("/api/reviews", reviewRouter);

app.use("/api/payments", paymentRouter);

// Ruta para insertar productos en la db

app.use("/insertProducts", async (req, res) => {
  await Product.deleteMany({});
  const products = await Product.insertMany([
    {
      title: "The Ultimate Body Stretching Guide",
      price: 12.99,
      description:
        "A 28-DAY STRETCHING PROGRAM TO BETTER HEALTH & FITNESS If you sit for most of the day or you are ageing a little, your body is going to start stiffening up and you may notice common problems such as lower back, joint and shoulder pain developing. You might be nursing an injury or simply need to destress from carrying around too much tension, so that you can sleep better at night. But what if you don’t have time for the gym or are a beginner wanting to get things right but cannot afford an instructor? You need an easy practice that you can do from the comfort of your own home where you will begin to feel and see results fast! ONLY 15 MINUTES OF STRETCHING EXERCISES PER DAY WILL BRING CLEAR RESULTS Whether you want to recover from pain or prevent it from happening, by practicing a little each day you will begin to see powerful results. Stretches are vital for a good warm-up and a great work out. And do you know what is great? These simple, yet effective stretches can be learned by anyone. You won’t need to be an acrobat to use this book! A GUIDE THAT GETS TO THE POINT QUICKLY & SIMPLY If you hate reading pages of information just to learn a simple exercise then Dave LeLino’s The Ultimate Body Stretching Guide is for you. It will be your go-to resource for easily accessible, step-by-step routines that provide an instant understanding of the body and feeling great. If you are getting on a bit, this book will help make you feel younger, if you are nursing an injury it will help speed up recovery, and if you are a skilled sportsperson it will provide an effective program for warming up correctly, preventing injury and improving performance. A MUST-HAVE GUIDE FOR STARTING OUT WITH STRETCHES Dave LeLino is an experienced Life Guard, Fitness Instructor, Swimming Teacher and Dietician and studied at the Institute of Technology, Sligo with a Masters in Recreation and Fitness. After experiencing injuries and sprains from working out at the gym his curiosity regarding stretching enabled him to quickly see amazing results and to improve his performance while suffering fewer setbacks. The best of his knowledge has come together to form an easy to access 28-Day Challenge where upon completion LeLino states the reader will experience increased blood and oxygen flow, improved healing of injuries, strengthened posture, enhanced flexibility and an all-round feeling of well-being. SOME OF THE SUBJECTS COVERED ARE: The Basics of Body Stretching When NOT to Stretch Myths Vs Facts of Body Stretching Machines and Equipment Safety Tips A Monthly Warm Up & Body-Toning Plan Includes BONUS! Stretches to Heal Yourself LeLino’s The Ultimate Body Stretching Guide brings the experienced teacher to the interested student and provides a practical 28-day work out that achieves real results. Get it now! (show less",
      img: "https://m.media-amazon.com/images/I/51jO9w-1duL._SY346_.jpg",
      stock: 45,
      category: "YOGA",
      rating: 0,
    },
    {
      title: "Burn the Fat, Feed the Muscle",
      price: 2600,
      description:
        "A no-nonsense plan that has been proven and tested by more than 300,000 people in 154 countries. Whether you want to shed 10 pounds or 100, whether you want to build muscle or just look more toned, this book is the original “bible of fitness” that shows you how to get permanent results the safe, healthy, and natural way. Do you want to shed fat and sculpt a new body shape at the same time? Do you want a program without gimmicks, hype, or quick fixes? Do you want a program guaranteed to work, no matter how old you are or what kind of shape you’re in now? For twenty-five years, industry veteran and bestselling author Tom Venuto has built a reputation as one of the world’s most respected fat-loss experts. In Burn the Fat, Feed the Muscle—known by fans as “the bible of fat loss”—Tom reveals the body transformation secrets of the leanest people in the world. This is not a diet and it’s not just a weight-loss program; this is a breakthrough system to change your life and get you leaner, stronger, fitter, and healthier with the latest discoveries in exercise and nutrition science. Inside, you’ll discover:- The simple but powerful LEAN formula, revealing the four crucial elements of body transformation success. - The New Body 28 (TNB-28): a four-week training plan for sculpting lean muscle, plus a quick start primer workout perfect for beginners - A lifestyle program that’s more flexible and easier than ever to follow, even if you are busy, have dietary restrictions, or have never worked out before. - The motivation strategies it takes to stick with your plan.   Burn the Fat, Feed the Muscle is not about getting as ripped as a fitness model or becoming a bodybuilder like Tom did (unless you want to); it’s about using their secrets to achieve your own personal goals. You are sure to call it your fitness bible for many years to come. From the Hardcover edition.",
      img: "https://http2.mlstatic.com/D_NQ_NP_602961-MLA42591193963_072020-O.webp",
      stock: 45,
      category: "NUTRITION",
      rating: 0,
    },
    {
      title: "Weight Training",
      price: 2400,
      description:
        "You don't need to spend money on a countless array of workout supplements other fitness fanatics swear by. You don't need to continually make changes in your routine and workouts. You don't need to spend arduous hours doing reps, sets, and super sets. You don't need to add ridiculous amounts of cardio to your regime. You don't need to eat boring foods to kick-start your muscle building efforts. And… in this title, you're going to learn secrets that most people will never know... because they're actually tried, tested, and scientifically proven to work. And, I've even done them myself, with excellent results, over many years! You'll Also Learn: All about muscle science, and how unique it is to your overall success. How to keep a positive mindset, for a winning formula! The 3 Pillars; without these you're absolutely lost. The biggest bodybuilding myths that can set you in the wrong direction. How to work out for your specific body type. Yes, this works wonders! Basic training principles to put you ahead of the game, no matter what your goals are. The untold key to super strength gains; be the best you can be, long-term! Just like a real-life superhero! How diet influences your training, overall. A fantastic must-do training program! And loads, loads, loads more… Imagine... just a few months from right now...being noticed by the people you know, and even the ones you don't. They'll totally want to know ALL your secrets… Yes, you totally can achieve that shredded, muscular look you've only ever dreamed about. And I'm gonna tell you everything I know to get you there! I can't wait! With over a decade of tried and tested experience, my name is Vince Kowalski, and I'm going to get you the dream body you've always wanted. Knowledge is power… so, I'll see you on the inside. I can't wait to share everything with you in there… ",
      img: "https://m.media-amazon.com/images/I/51toJ9xyAML._SY346_.jpg",
      stock: 45,
      category: "TRAINING",
      rating: 0,
    },
    {
      title:
        "Bigger Leaner Stronger: The Simple Science of Building the Ultimate Male Body",
      price: 2000,
      description:
        "You don't need to spend money on a countless array of workout supplements other fitness fanatics swear by. You don't need to continually make changes in your routine and workouts. You don't need to spend arduous hours doing reps, sets, and super sets. You don't need to add ridiculous amounts of cardio to your regime. You don't need to eat boring foods to kick-start your muscle building efforts. And… in this title, you're going to learn secrets that most people will never know... because they're actually tried, tested, and scientifically proven to work. And, I've even done them myself, with excellent results, over many years! You'll Also Learn: All about muscle science, and how unique it is to your overall success. How to keep a positive mindset, for a winning formula! The 3 Pillars; without these you're absolutely lost. The biggest bodybuilding myths that can set you in the wrong direction. How to work out for your specific body type. Yes, this works wonders! Basic training principles to put you ahead of the game, no matter what your goals are. The untold key to super strength gains; be the best you can be, long-term! Just like a real-life superhero! How diet influences your training, overall. A fantastic must-do training program! And loads, loads, loads more… Imagine... just a few months from right now...being noticed by the people you know, and even the ones you don't. They'll totally want to know ALL your secrets… Yes, you totally can achieve that shredded, muscular look you've only ever dreamed about. And I'm gonna tell you everything I know to get you there! I can't wait! With over a decade of tried and tested experience, my name is Vince Kowalski, and I'm going to get you the dream body you've always wanted. Knowledge is power… so, I'll see you on the inside. I can't wait to share everything with you in there… ",
      img: "https://m.media-amazon.com/images/I/51w+8T3bnqL._SX355_BO1,204,203,200_.jpg",
      stock: 60,
      category: "TRAINING",
      rating: 0,
    },
    {
      title:
        "https://m.media-amazon.com/images/I/51maCPKMAQS._SX380_BO1,204,203,200_.jpg",
      price: 3800,
      description:
        "Weight loss books have historically been rife with misinformation. A conveyor belt of diet books pretending to have the latest revolutionary weight loss hacks, trying to grab your attention with whatever weight loss diet is trending. What is the best diet for you? Is it the ketogenic diet? Is it intermittent fasting? Is it the 5:2 diet? Is it a low-carb diet, a low-fat diet, or one of the many rapid weight loss plans promising that you can all lose an astronomical amount of weight in a short space of time? Do you know what doesn't make sense? Telling everyone to follow the same weight loss diet, period. Diets are not one size fits all. We are all different, and a diet plan that your friend is successful with might be a diet plan that doesn’t work for you. There is no 'best' weight loss diet for everyone. We are all individuals with different biology, preferences, and circumstances. ",
      img: "https://m.media-amazon.com/images/I/41kzW8ecF0L._SX331_BO1,204,203,200_.jpg",
      stock: 52,
      category: "NUTRITION",
      rating: 0,
    },
    {
      title: "The Anatomy of Stretching",
      price: 5500,
      description:
        "The multiple stresses of contemporary life—whether from excessive sports play, overwork, or overuse of technology—are increasingly taking a toll on the body. Symptoms range from muscle soreness and pain to pinched nerves to potentially more permanent disabilities, including serious body injuries. One safe, quickly productive way to address the problem is through a simple therapy that can be done anywhere, anytime, and without special equipment: stretching. This new edition of Brad Walker’s best-selling book on the subject presents 135 unique stretching exercises designed to help repair the body and make it more flexible, fit, and relaxed. ",
      img: "https://m.media-amazon.com/images/I/51maCPKMAQS._SX380_BO1,204,203,200_.jpg",
      stock: 63,
      category: "YOGA",
      rating: 0,
    },
  ]);

  res.status(200).send(products);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando al puerto ${PORT}`);
});
