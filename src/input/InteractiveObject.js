/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

//  Phaser.Input.InteractiveObject

/**
 * @classdesc
 * [description]
 *
 * @class InteractiveObject
 * @memberOf Phaser.Input
 * @constructor
 * @since 3.0.0
 *
 * @param {Phaser.Game} gameObject - [description]
 * @param {object} hitArea - [description]
 * @param {function} hitAreaCallback - [description]
 */
var InteractiveObject = function (gameObject, hitArea, hitAreaCallback)
{
    return {

        gameObject: gameObject,

        enabled: true,
        draggable: false,
        dropZone: false,

        target: null,

        camera: null,

        hitArea: hitArea,
        hitAreaCallback: hitAreaCallback,

        localX: 0,
        localY: 0,

        //  0 = Not being dragged
        //  1 = Being checked for dragging
        //  2 = Being dragged
        dragState: 0,

        dragStartX: 0,
        dragStartY: 0,

        dragX: 0,
        dragY: 0

    };
};

module.exports = InteractiveObject;
