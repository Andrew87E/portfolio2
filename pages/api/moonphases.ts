import type { NextApiRequest, NextApiResponse } from 'next'

// [{"Error":0,"ErrorMsg":"success","TargetDate":"1715109545","Moon":["Planting Moon"],"Index":29,"Age":29.166479542165202332171247689984738826751708984375,"Phase":"Dark Moon","Distance":369851.0599999999976716935634613037109375,"Illumination":0,"AngularDiameter":0.5384820473055305090070987716899253427982330322265625,"DistanceToSun":151008693.5058629512786865234375,"SunAngularDiameter":0.52814938833242397464573514298535883426666259765625}]
type MoonPhases = {
    // camelCase is used here to match the rest of the project
    error: number;
    errorMsg: string;
    targetDate: string;
    moon: string[];
    index: number;
    age: number;
    phase: string;
    distance: number;
    illumination: number;
    angularDiameter: number;
    distanceToSun: number;
    sunAngularDiameter: number;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<MoonPhases>) {
    const timeStamp = Math.floor(Date.now() / 1000);
    const response = await fetch(`https://api.farmsense.net/v2/moonphases/?d=${timeStamp}`);
    const data = await response.json();

    // console.log(data);

    if (data.error == 0) {
        res.status(200).json(data);
    } else {
        res.status(418);
    }
}
