function setup()
{
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(160,100)

    canvas = createCanvas(550, 550);
    canvas.position(860, 100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses)
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!');
}

function draw()
{
    background('#093182')
}

function gotPoses()
{
    if(results.length > 0)
    {
        console.log(results);
    }
}