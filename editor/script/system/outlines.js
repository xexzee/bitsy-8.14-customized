/* OUTLINES */
/* defines regions of the canvas to block out behind the player's current position, */
/* grouped according to the ID of the currently active avatar sprite */
const OUTLINES = [
    {
        spriteIds: [
            '5v', // left facing avatar outline
            'nv'  // ava entrance glow overlap left
        ], 
        drawRegions: [
            [ // first frame
                {
                    x: 1, // x relative to current player position, measured in pixels 
                    y: -1,  // y relative to current player position, measured in pixels
                    width: 5, // width measured in pixels
                    height: 6 // height measured in pixels
                },
                {
                    x: 2,
                    y: 1,
                    width: 5,
                    height: 8
                },
                {
                    x: 6,
                    y: 2,
                    width: 2,
                    height: 5
                }
            ],
            [ // second frame
                {
                    x: 1,
                    y: 0,
                    width: 5,
                    height: 6
                },
                {
                    x: 2,
                    y: 2,
                    width: 5,
                    height: 7
                },
                {
                    x: 6,
                    y: 3,
                    width: 2,
                    height: 5
                }
            ]
        ],
    },
    {
        spriteIds: [
            'mh', // right facing avatar outline
            'nu'  // ava entrance glow overlap right
        ],
        drawRegions: [
            [
                {
                    x: 2,
                    y: -1,
                    width: 5,
                    height: 6
                },
                {
                    x: 1,
                    y: 1,
                    width: 5,
                    height: 8
                },
                {
                    x: 0,
                    y: 2,
                    width: 2,
                    height: 5
                }
            ],
            [
                {
                    x: 2,
                    y: 0,
                    width: 5,
                    height: 6
                },
                {
                    x: 1,
                    y: 2,
                    width: 5,
                    height: 7
                },
                {
                    x: 0,
                    y: 3,
                    width: 2,
                    height: 5
                }
            ]
        ]
    },
    // {
    //     spriteIds: ['nm'],
    //     drawRegions: [
    //         [
    //             {
    //                 x: 1,
    //                 y: -1,
    //                 width: 5,
    //                 height: 6
    //             },
    //             {
    //                 x: 2,
    //                 y: 1,
    //                 width: 5,
    //                 height: 5
    //             },
    //             {
    //                 x: 6,
    //                 y: 2,
    //                 width: 2,
    //                 height: 3
    //             }
    //         ],
    //         [
    //             {
    //                 x: 2,
    //                 y: -1,
    //                 width: 5,
    //                 height: 6
    //             },
    //             {
    //                 x: 7,
    //                 y: 1,
    //                 width: 1,
    //                 height: 3
    //             }
    //         ]
    //     ]
    // }
    // 'np': [
// 		[
// 			{
// 				x: 5,
// 				y: -1,
// 				width: 5,
// 				height: 5
// 			},
// 			{
// 				x: 4,
// 				y: 1,
// 				width: 4,
// 				height: 5
// 			},
// 			{
// 				x: 3,
// 				y: 2,
// 				width: 2,
// 				height: 3
// 			},
// 			{
// 				x: 8,
// 				y: 0,
// 				width: 1,
// 				height: 2,
// 				color: '#ff4050'
// 			},
// 			{
// 				x: 8,
// 				y: 3,
// 				width: 1,
// 				height: 1,
// 				color: '#ff4050'
// 			}
// 		],
// 		[
// 			{
// 				x: 5,
// 				y: -1,
// 				width: 5,
// 				height: 5
// 			},
// 			{
// 				x: 4,
// 				y: 1,
// 				width: 4,
// 				height: 5
// 			},
// 			{
// 				x: 3,
// 				y: 2,
// 				width: 2,
// 				height: 4
// 			},
// 			{
// 				x: 8,
// 				y: 0,
// 				width: 1,
// 				height: 2,
// 				color: '#ff4050'
// 			},
// 			{
// 				x: 8,
// 				y: 3,
// 				width: 1,
// 				height: 1,
// 				color: '#ff4050'
// 			}
// 		]
// 	],
// 	'nq': [
// 		[
// 			{
// 				x: 2,
// 				y: 2,
// 				width: 3,
// 				height: 1
// 			}
// 		],
// 		[
// 			{
// 				x: 2,
// 				y: 3,
// 				width: 3,
// 				height: 1
// 			}
// 		]
// 	],
// 	'ns': [
// 		[
// 			{
// 				x: 3,
// 				y: 2,
// 				width: 3,
// 				height: 1
// 			}
// 		],
// 		[
// 			{
// 				x: 3,
// 				y: 3,
// 				width: 3,
// 				height: 1
// 			}
// 		]
// 	]
]