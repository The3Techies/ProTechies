interface SectionData {
    name: string;
    discretion: string;
    icon: React.ReactNode; 
}

const services: SectionData[] = [
    {
        icon: <svg className="h-24 aspect-square mb-6 fill-Highlight"  viewBox="0 0 512 512"> <path d="M375.969,381.521H130.978v50.003v0.16v0.032l0.018,0.161v0.032v0.16v0.033 v0.16v0.032l0.014,0.161l0.018,0.192l0,0l0.014,0.193l0,0l0.018,0.193l0.014,0.192l0.018,0.193l0,0l0.032,0.16v0.033l0.031,0.16 l0,0l0.035,0.193l0.032,0.192l0,0l0.032,0.193l0.031,0.161l0.032,0.193l0.049,0.161l0.049,0.193l0.046,0.193l0,0l0.049,0.16 l0.049,0.193l0.049,0.16l0.063,0.193l0.049,0.161l0.049,0.193l0.063,0.16l0.063,0.193l0.067,0.16l0.063,0.162l0.063,0.161 l0.081,0.192l0.081,0.16l0.063,0.161l0.081,0.162l0.081,0.16l0.066,0.161l0.095,0.161l0.081,0.192l0.081,0.129l0.095,0.161 l0.098,0.16l0.081,0.161l0.095,0.161l0.098,0.161l0.095,0.16l0.098,0.129l0.112,0.16l0.099,0.162l0.095,0.128l0.112,0.161 l0.112,0.128l0.098,0.162l0.112,0.129l0.112,0.16l0.13,0.129l0.095,0.129l0.13,0.161l0.112,0.129l0.112,0.128l0.13,0.129 l0.126,0.129l0.13,0.128l0.129,0.129c2.703,2.735,6.465,4.409,10.585,4.409h214.971l0,0h0.193h0.192l0,0h0.179h0.014h0.162h0.031 h0.162l0.031-0.033h0.161h0.032h0.161h0.018l0.161-0.032h0.031h0.145l0.031-0.031h0.162h0.031l0.147-0.033h0.046l0.129-0.031 h0.063l0.13-0.032h0.049l0.127-0.033h0.049l0.13-0.031h0.063l0.13-0.032h0.049l0.112-0.033h0.081l0.112-0.031l0.063-0.031h0.099 l0.077-0.033l0.115-0.032h0.064l0.094-0.031l0.099-0.033l0.081-0.032h0.08l0.096-0.031l0.098-0.033l0.08-0.031l0.082-0.033h0.094 l0.099-0.032l0.063-0.031l0.094-0.033l0.067-0.032l0.112-0.031l0.063-0.032l0.113-0.033l0.066-0.031l0.095-0.032l0.063-0.033 l0.129-0.031l0.032-0.032l0.13-0.032l0.049-0.032l0.112-0.032l0.05-0.032l0.111-0.064h0.063l0.112-0.063h0.049l0.113-0.065 l0.031-0.031l0.144-0.065h0.035l0.126-0.063h0.032l0.291-0.161l0.015-0.032l0.146-0.063l0,0l0.162-0.097l0,0l0.158-0.065l0,0 l0.161-0.097l0,0l0.579-0.386h0.031l0.13-0.097l0,0l0.161-0.128l0.131-0.064l0.014-0.032l0.112-0.064l0.034-0.032l0.257-0.192 l0.032-0.033l0.417-0.321l0.099-0.097l0.045-0.031l0.273-0.227l0.082-0.064l0.049-0.063l0.08-0.065l0.049-0.063l0.081-0.064 l0.046-0.032l0.08-0.064l0.067-0.064l0.126-0.161c0.597-0.579,1.145-1.222,1.625-1.897v-0.033l0.422-0.579l0,0l0.192-0.321l0,0 l0.257-0.451v-0.031l0.094-0.129v-0.032l0.081-0.129h0.018l0.063-0.161v-0.031l0.098-0.129v-0.032l0.063-0.129l0.018-0.032 l0.081-0.129v-0.031l0.063-0.162l0,0l0.081-0.161l0,0l0.081-0.16l0,0l0.063-0.161v-0.031l0.131-0.29v-0.033l0,0l0.063-0.16l0,0 l0.063-0.161v-0.032l0.066-0.16l0,0l0.063-0.162v-0.031l0.049-0.161l0,0l0.049-0.161v-0.032l0.063-0.16l0,0l0.032-0.161 l0.018-0.032l0.045-0.16l0,0l0.035-0.193h0.014l0.032-0.161l0.017-0.032l0.032-0.161l0,0l0.032-0.193l0,0l0.035-0.161l0,0 l0.031-0.193l0,0l0.031-0.192l0,0l0.031-0.16l0.018-0.033l0.014-0.16v-0.033l0.032-0.16l0,0l0.018-0.193h0.018v-0.192l0,0 l0.032-0.193l0,0v-0.193h0.014v-0.192h0.018v-0.161v-0.032v-0.16l0.014-0.033v-0.16v-0.032v-0.161v-0.192V381.521z M130.978,373.605h244.991v-10.297h-96.736c-2.189,0-3.958-1.77-3.958-3.957v-93.537c0-2.188,1.769-3.959,3.958-3.959h96.736 c0-67.635,0-135.303,0-202.97c0-4.118-1.688-7.851-4.422-10.586c-2.702-2.702-6.469-4.408-10.588-4.408H145.988 c-4.12,0-7.882,1.673-10.602,4.408c-2.72,2.702-4.408,6.468-4.408,10.586V84.37H343.52c2.19,0,3.959,1.77,3.959,3.958 c0,2.188-1.769,3.957-3.959,3.957H130.978v24.165h28.381c2.169,0,3.941,1.77,3.941,3.958v64.643c0,2.188-1.772,3.957-3.941,3.957 h-28.381V373.605z M260.552,406.813c-1.818-1.803-4.327-2.93-7.079-2.93s-5.261,1.127-7.061,2.93 c-1.818,1.802-2.931,4.311-2.931,7.078s1.113,5.276,2.931,7.079c1.8,1.802,4.31,2.929,7.061,2.929c2.769,0,5.26-1.127,7.079-2.929 c1.804-1.803,2.931-4.312,2.931-7.079S262.355,408.614,260.552,406.813z M253.473,395.969c4.956,0,9.444,2.027,12.662,5.244 c3.25,3.25,5.261,7.723,5.261,12.678s-2.011,9.429-5.261,12.678c-3.218,3.25-7.706,5.245-12.662,5.245 c-4.938,0-9.426-1.995-12.662-5.245c-3.25-3.249-5.243-7.723-5.243-12.678s1.993-9.428,5.243-12.678 C244.047,397.996,248.535,395.969,253.473,395.969z M283.188,269.771v85.623h96.74h0.112h37.18v-85.623 C372.543,269.771,327.867,269.771,283.188,269.771z M149.206,35.977h211.753c6.307,0,12.033,2.574,16.186,6.725 s6.742,9.878,6.742,16.185v185.08h9.443V40.996c0-4.119-1.705-7.884-4.408-10.586c-2.736-2.736-6.485-4.408-10.619-4.408H163.363 c-3.99,0-7.644,1.544-10.329,4.118C151.329,31.729,150.01,33.725,149.206,35.977z M234.36,70.115c-2.172,0-3.958-1.77-3.958-3.957 c0-2.188,1.786-3.958,3.958-3.958h38.243c2.187,0,3.958,1.77,3.958,3.958c0,2.188-1.771,3.957-3.958,3.957H234.36z M295.464,289.561c-2.172,0-3.958-1.77-3.958-3.958s1.786-3.958,3.958-3.958h49.794c2.189,0,3.958,1.77,3.958,3.958 s-1.769,3.958-3.958,3.958H295.464z M295.464,306.066c-2.172,0-3.958-1.77-3.958-3.957s1.786-3.958,3.958-3.958h109.482 c2.187,0,3.956,1.771,3.956,3.958s-1.77,3.957-3.956,3.957H295.464z M295.464,322.573c-2.172,0-3.958-1.77-3.958-3.958 c0-2.188,1.786-3.957,3.958-3.957h109.482c2.187,0,3.956,1.77,3.956,3.957c0,2.188-1.77,3.958-3.956,3.958H295.464z M295.464,339.08c-2.172,0-3.958-1.77-3.958-3.957c0-2.188,1.786-3.959,3.958-3.959h109.482c2.187,0,3.956,1.771,3.956,3.959 c0,2.188-1.77,3.957-3.956,3.957H295.464z M112.991,156.67c-2.172,0-3.941-1.77-3.941-3.957s1.769-3.957,3.941-3.957h10.086 v-10.072c0-2.188,1.769-3.957,3.959-3.957c2.172,0,3.941,1.77,3.941,3.957v10.072h10.072c2.187,0,3.955,1.77,3.955,3.957 s-1.769,3.957-3.955,3.957h-10.072v10.072c0,2.188-1.769,3.957-3.941,3.957c-2.19,0-3.959-1.77-3.959-3.957V156.67H112.991z M197.777,121.341c-2.172,0-3.958-1.802-3.958-3.958c0-2.188,1.786-3.957,3.958-3.957h67.119c2.172,0,3.959,1.77,3.959,3.957 c0,2.156-1.787,3.958-3.959,3.958H197.777z M197.777,142.771c-2.172,0-3.958-1.771-3.958-3.958c0-2.156,1.786-3.957,3.958-3.957 h98.477c2.187,0,3.955,1.801,3.955,3.957c0,2.188-1.769,3.958-3.955,3.958H197.777z M197.777,164.232 c-2.172,0-3.958-1.77-3.958-3.958c0-2.188,1.786-3.958,3.958-3.958h146.9c2.19,0,3.959,1.771,3.959,3.958 c0,2.188-1.769,3.958-3.959,3.958H197.777z M197.777,185.694c-2.172,0-3.958-1.771-3.958-3.958s1.786-3.958,3.958-3.958h146.9 c2.19,0,3.959,1.771,3.959,3.958s-1.769,3.958-3.959,3.958H197.777z M197.777,207.156c-2.172,0-3.958-1.77-3.958-3.958 s1.786-3.958,3.958-3.958h146.9c2.19,0,3.959,1.77,3.959,3.958s-1.769,3.958-3.959,3.958H197.777z M76.405,470.521 c-2.187,0-3.955-1.77-3.955-3.958c0-2.187,1.769-3.957,3.955-3.957h254.309c2.173,0,3.94,1.771,3.94,3.957 c0,2.188-1.768,3.958-3.94,3.958H76.405z M441.305,478.083c2.173,0,3.959,1.771,3.959,3.958s-1.786,3.958-3.959,3.958H216.873 c-2.172,0-3.958-1.771-3.958-3.958s1.786-3.958,3.958-3.958H441.305z M198.869,478.083c2.172,0,3.959,1.771,3.959,3.958 s-1.787,3.958-3.959,3.958h-21.99c-2.19,0-3.959-1.771-3.959-3.958s1.769-3.958,3.959-3.958H198.869z M348.314,470.521 c-2.173,0-3.959-1.77-3.959-3.958c0-2.187,1.786-3.957,3.959-3.957h22.008c2.189,0,3.959,1.771,3.959,3.957 c0,2.188-1.77,3.958-3.959,3.958H348.314z M66.736,170.925c0,1.513,0.965,3.057,2.221,3.571c2.639,1.32,5.679-0.707,5.679-3.571 v-7.884c0-1.512-0.983-3.057-2.222-3.57c-2.636-1.32-5.678,0.707-5.678,3.57V170.925z M66.736,202.555 c0,1.512,0.965,3.057,2.221,3.572c2.639,1.286,5.679-0.709,5.679-3.572v-7.883c0-1.514-0.983-3.057-2.222-3.572 c-2.636-1.318-5.678,0.708-5.678,3.572V202.555z M96.437,212.4c1.495,0,3.057-0.997,3.555-2.252 c1.319-2.606-0.691-5.663-3.555-5.663H88.52c-1.481,0-3.039,0.966-3.538,2.22c-1.319,2.639,0.674,5.695,3.538,5.695H96.437z M94.777,237.756c0,1.48,0.983,3.057,2.239,3.539c2.636,1.32,5.678-0.676,5.678-3.539v-7.915c0-1.48-0.982-3.058-2.221-3.54 c-2.639-1.318-5.696,0.676-5.696,3.54V237.756z M94.777,269.386c0,1.479,0.983,3.057,2.239,3.539 c2.636,1.319,5.678-0.675,5.678-3.539v-7.916c0-1.479-0.982-3.057-2.221-3.539c-2.639-1.319-5.696,0.676-5.696,3.539V269.386z M94.777,301.016c0,1.479,0.983,3.024,2.239,3.539c2.636,1.319,5.678-0.708,5.678-3.539V293.1c0-1.512-0.982-3.057-2.221-3.572 c-2.639-1.318-5.696,0.709-5.696,3.572V301.016z M94.777,332.613c0,1.512,0.983,3.057,2.239,3.57 c2.636,1.32,5.678-0.707,5.678-3.57v-7.885c0-1.512-0.982-3.057-2.221-3.57c-2.639-1.319-5.696,0.707-5.696,3.57V332.613z M94.777,364.242c0,1.513,0.983,3.057,2.239,3.572c2.636,1.318,5.678-0.709,5.678-3.572v-7.883c0-1.513-0.982-3.057-2.221-3.572 c-2.639-1.318-5.696,0.708-5.696,3.572V364.242z M74.636,131.412c0-1.512-0.983-3.057-2.222-3.572 c-2.636-1.318-5.678,0.709-5.678,3.572v7.916c0,1.479,0.965,3.023,2.221,3.539c2.639,1.319,5.679-0.676,5.679-3.539V131.412z M155.4,181.093v-56.728c-18.92,0-37.826,0-56.745,0v56.728C117.575,181.093,136.48,181.093,155.4,181.093z" ></path></svg>,
        name: "App Development",
        discretion: "We develop sleek and user-friendly Android & iOS mobile applications, equipped with the latest features, ensuring a seamless and contemporary user experience.",
    },
    {
        icon: <svg className="h-24 aspect-square mb-6 fill-Highlight" viewBox="0 0 419.931 419.931"><path d="M282.895,352.367c-2.176-1.324-4.072-3.099-5.579-5.25c-0.696-0.992-1.284-2.041-1.771-3.125H28.282V100.276h335.624 v159.138c7.165,0.647,13.177,5.353,15.701,11.797c2.235-1.225,4.726-1.982,7.344-2.213c1.771-0.154,3.53-0.044,5.236,0.293 V39.561c0-12.996-10.571-23.569-23.566-23.569H23.568C10.573,15.992,0,26.565,0,39.561v309.146 c0,12.996,10.573,23.568,23.568,23.568h257.179c-2.007-4.064-2.483-8.652-1.302-13.066 C280.126,356.67,281.304,354.354,282.895,352.367z M338.025,55.569c0-4.806,3.896-8.703,8.702-8.703h8.702 c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702h-8.702c-4.807,0-8.702-3.896-8.702-8.702V55.569z M297.56,55.569c0-4.806,3.896-8.703,8.702-8.703h8.703c4.807,0,8.702,3.896,8.702,8.703v9.863c0,4.806-3.896,8.702-8.702,8.702 h-8.703c-4.806,0-8.702-3.896-8.702-8.702V55.569z M257.094,55.569c0-4.806,3.897-8.703,8.702-8.703h8.702 c4.807,0,8.703,3.896,8.703,8.703v9.863c0,4.806-3.896,8.702-8.703,8.702h-8.702c-4.805,0-8.702-3.896-8.702-8.702V55.569z"></path> <path d="M419.875,335.77l-2.615-14.83c-0.353-1.997-2.256-3.331-4.255-2.979l-13.188,2.324c-1.583-3.715-3.605-7.195-6.005-10.38 l8.614-10.268c0.626-0.744,0.931-1.709,0.847-2.68c-0.086-0.971-0.554-1.867-1.3-2.494l-11.534-9.68 c-0.746-0.626-1.713-0.93-2.683-0.845c-0.971,0.085-1.867,0.552-2.493,1.298l-8.606,10.26c-3.533-1.8-7.312-3.188-11.271-4.104 v-13.392c0-2.028-1.645-3.674-3.673-3.674h-15.06c-2.027,0-3.673,1.646-3.673,3.674v13.392 c-3.961,0.915-7.736,2.304-11.271,4.104l-8.608-10.259c-1.304-1.554-3.62-1.756-5.175-0.453l-11.535,9.679 c-0.746,0.627-1.213,1.523-1.299,2.494c-0.084,0.971,0.22,1.937,0.846,2.683l8.615,10.266c-2.396,3.184-4.422,6.666-6.005,10.38 l-13.188-2.325c-1.994-0.351-3.901,0.982-4.255,2.979l-2.614,14.83c-0.169,0.959,0.05,1.945,0.607,2.744 c0.561,0.799,1.41,1.342,2.37,1.511l13.198,2.326c0.215,4.089,0.927,8.045,2.073,11.812l-11.6,6.695 c-0.844,0.485-1.459,1.289-1.712,2.229c-0.252,0.941-0.119,1.943,0.367,2.787l7.529,13.041c0.485,0.844,1.289,1.459,2.229,1.711 c0.313,0.084,0.632,0.125,0.951,0.125c0.639,0,1.272-0.166,1.836-0.492l11.609-6.703c2.73,2.925,5.812,5.517,9.18,7.709 l-4.584,12.593c-0.332,0.916-0.289,1.926,0.123,2.809s1.157,1.566,2.072,1.898l14.148,5.149c0.406,0.148,0.832,0.224,1.257,0.224 c0.53,0,1.063-0.115,1.554-0.345c0.883-0.411,1.564-1.157,1.897-2.073l4.583-12.593c1.965,0.238,3.965,0.361,5.994,0.361 s4.029-0.125,5.994-0.361l4.584,12.593c0.332,0.916,1.016,1.662,1.897,2.073c0.49,0.229,1.021,0.345,1.554,0.345 c0.424,0,0.85-0.074,1.256-0.224l14.15-5.149c0.913-0.332,1.659-1.017,2.07-1.898c0.412-0.883,0.456-1.893,0.123-2.809 l-4.584-12.591c3.365-2.192,6.447-4.786,9.18-7.709l11.609,6.703c0.563,0.324,1.197,0.492,1.836,0.492 c0.318,0,0.64-0.043,0.951-0.125c0.941-0.252,1.743-0.869,2.229-1.711l7.529-13.043c0.486-0.842,0.619-1.846,0.367-2.787 c-0.253-0.938-0.868-1.742-1.712-2.229l-11.598-6.693c1.146-3.768,1.856-7.724,2.071-11.812l13.198-2.327 c0.96-0.169,1.812-0.712,2.37-1.511C419.825,337.715,420.044,336.729,419.875,335.77z M354.184,359.336 c-11.155,0-20.2-9.045-20.2-20.201s9.046-20.2,20.2-20.2c11.156,0,20.201,9.044,20.201,20.2S365.34,359.336,354.184,359.336z"></path><path d="M164.695,235.373c0-4.752-2.785-9.117-7.096-11.119l-39.455-18.332l39.456-18.334c4.31-2.004,7.095-6.368,7.095-11.118 v-0.319c0-4.21-2.119-8.075-5.665-10.334c-1.962-1.253-4.247-1.916-6.606-1.916c-1.778,0-3.563,0.391-5.16,1.133l-63.078,29.333 c-4.309,2.004-7.092,6.368-7.092,11.117v0.877c0,4.743,2.782,9.104,7.093,11.118l63.084,29.336 c1.631,0.755,3.368,1.138,5.162,1.138c2.338,0,4.616-0.664,6.597-1.924c3.548-2.268,5.666-6.13,5.666-10.335L164.695,235.373 L164.695,235.373z"></path> <path d="M226.932,134.012c-2.301-3.15-6.002-5.03-9.901-5.03h-0.314c-5.354,0-10.048,3.425-11.679,8.516L163.478,266.27 c-1.183,3.718-0.517,7.813,1.781,10.962c2.301,3.148,6.002,5.029,9.901,5.029h0.315c5.352,0,10.043-3.426,11.672-8.516 l41.555-128.762C229.896,141.268,229.234,137.167,226.932,134.012z"></path> <path d="M308.001,194.366l-63.079-29.333c-1.592-0.74-3.374-1.131-5.152-1.131c-2.358,0-4.644,0.661-6.605,1.912 c-3.552,2.263-5.671,6.127-5.671,10.337v0.319c0,4.746,2.783,9.111,7.097,11.123l39.454,18.33l-39.455,18.331 c-4.311,2.002-7.096,6.367-7.096,11.119v0.321c0,4.205,2.119,8.066,5.669,10.336c1.974,1.258,4.254,1.923,6.595,1.923 c1.792,0,3.527-0.383,5.169-1.141l63.082-29.336c4.307-2.009,7.088-6.371,7.088-11.114v-0.877 C315.094,200.735,312.311,196.371,308.001,194.366z"></path></svg>,
        name: "Web Development",
        discretion: "We craft dynamic and intuitive websites that captivate users, providing seamless navigation and delivering an exceptional online experience tailored to your business needs.",
    },
    {
        icon: <svg className="h-24 aspect-square mb-6 fill-Highlight" viewBox="0 0 48 48"><path d="M46,24A12,12,0,0,0,34,12c-5.2,0-9.5,4.1-11.9,11.4C20.3,28.9,17.3,32,14,32a8,8,0,0,1,0-16h1.2l-1.6,1.6a1.9,1.9,0,0,0,.2,3,2.1,2.1,0,0,0,2.7-.2l4.9-5a1.9,1.9,0,0,0,0-2.8l-4.9-5a2.1,2.1,0,0,0-2.7-.2,1.9,1.9,0,0,0-.2,3L15.2,12H14a12,12,0,0,0,0,24c5.2,0,9.5-4.1,11.9-11.4C27.7,19.1,30.7,16,34,16a8,8,0,0,1,0,16H32.8l1.6-1.6a1.9,1.9,0,0,0-.2-3,2.1,2.1,0,0,0-2.7.2l-4.9,5a1.9,1.9,0,0,0,0,2.8l4.9,5a2.1,2.1,0,0,0,2.7.2,1.9,1.9,0,0,0,.2-3L32.8,36H34A12,12,0,0,0,46,24Z"></path></svg>,
        name: "Devops",
        discretion: "Boost your software development with our efficient DevOps solutions, ensuring seamless collaboration and rapid deployment.",
    },
]

const servicesHtml = services.map((section, index) => (
    <div key={index} className="bg-SecondaryBg bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px] shadow-Highlight lg:w-[31%] flex flex-col items-center  px-2 py-6">
        {section.icon}
        <h1 className="text-[#FFF] font-bold text-xl lg:text-3xl  text-center mb-6 w-full px-12">{section.name}</h1>
        <p className="text-[#FFF] text-sm lg:text-base 2xl:text-lg text-center px-6 lg:px-2 ">{section.discretion}</p>
    </div>
))

const OurServices: React.FC = () => {
    return (
        <div className="bg-PrimaryBg w-full flex justify-around " >
            <div id="OurServices" className="w-[90%] 2xl:w-[70%] mb-12">

                <h1 className="text-[#FFF] font-bold text-3xl lg:text-4xl 2xl:text-6xl border-l-[5px] border-Highlight pl-4 mb-10">Services We Offer</h1>

                <div className="flex justify-between lg:flex-row flex-col gap-6">
                    {servicesHtml}
                </div>

            </div>
        </div>
    )
}

export default OurServices