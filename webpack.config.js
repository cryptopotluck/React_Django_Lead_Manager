
module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_mpdules/,
                use: {
                    loader: "babel-loader"

                }

            }

        ]

    }

};