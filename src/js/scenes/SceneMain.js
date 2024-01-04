import Road from "../classes/Road";
import { G } from "../index";
import AlignGrid from "../classes/utility/AlignGrid";
import SoundButtons from "../classes/ui/SoundButtons";
import ScoreBox from "../classes/comps/ScoreBox";
import Singleton from "../classes/mc/Singleton";

export default class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload() { }
    create() {
        const s = new Singleton();
        const emitter = s.emitter;
        const model = s.model;
        const mediaManager = s.mediaManager;

        var btnStart=new FlatButton({scene:this, emitter: emitter, model: model, key:'button1',text:'Fire',event:'start_game'});
        this.alignGrid.placeAtIndex(93,btnStart);
        emitter.on('start_game',this.onClick,this);


        var btnStart=new FlatButton({scene:this, emitter: emitter, model: model, key:'button1',text:'End game',event:'end_game'});
        this.alignGrid.placeAtIndex(93,btnStart);
        emitter.on('start_game',this.onClick,this);
        emitter.on('end_game',this.onEnd,this);
    }

    onEnd() {
        this.scene.start('SceneOver');
    }
    onClick() {

        console.log('click...', new Date())
    }
    update() { }

}