module.exports  = {
    presets: [
        [
            "next/babel",
            {
                "preset-env": {},
                "transform-runtime": {},
                "styled-jsx": {},
                "class-properties": {}
            }
        ],
        [
            require.resolve('@babel/preset-env'),
            {
                targets:{
                    node: "current",
                }
            }
        ]
    ],
    plugins: [
        require.resolve('babel-plugin-transform-export-extensions'),
        require.resolve('@babel/plugin-proposal-class-properties'),
        require.resolve("@babel/plugin-proposal-private-methods"),
        [
            require.resolve('babel-plugin-module-resolver'),
            {
                root:["."],
                extensions: [".js"],
                alias: {
                    "@yid/config": "./src/config",
                    "@yid/constants": "./src/lib/constants/index",
                    "@yid/utils": "./src/lib/utils/index",
                    "@yid/handlers": "./src/lib/handlers/index"
                }
            }
        ]
    ]
}
