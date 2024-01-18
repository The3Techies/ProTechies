interface SectorsData {
    name: string;
    icon: React.ReactNode; 
  }
  
  const sectors: SectorsData[] = [
    {
        icon: <svg className="mb-6 h-[80px] w-[80px] fill-Highlight"  viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g data-name="12 site" id="_12_site"> <path d="M17.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,17.5,9.08Z"></path> <path d="M11.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,11.5,9.08Z"></path> <path d="M23.5,9.08a2,2,0,1,1-2-2.03A2.021,2.021,0,0,1,23.5,9.08Z"></path> <path d="M58.5,3.5H5.5a2.006,2.006,0,0,0-2,2v53a2.006,2.006,0,0,0,2,2h53a2.006,2.006,0,0,0,2-2V5.5A2.006,2.006,0,0,0,58.5,3.5Zm0,55H5.5V14.67h53Zm0-45.83H5.5V5.5h53Z"></path> <path d="M56.21,9.91a1,1,0,0,1-.01,1.41.96.96,0,0,1-.7.29.976.976,0,0,1-.71-.3l-.79-.8-.79.8a.976.976,0,0,1-.71.3.96.96,0,0,1-.7-.29,1,1,0,0,1-.01-1.41l.81-.83-.81-.82a1.008,1.008,0,0,1,.01-1.42,1,1,0,0,1,1.41.01l.79.81.79-.81a1,1,0,0,1,1.41-.01,1.008,1.008,0,0,1,.01,1.42l-.81.82Z"></path> <path d="M49.5,9.08a1,1,0,0,1-1,1h-4a1,1,0,0,1,0-2h4A1,1,0,0,1,49.5,9.08Z"></path> <path d="M20.15,42.89l3.63-2.09H41.45A2.889,2.889,0,0,0,44,39.24l5.67-10.71a3.089,3.089,0,0,0-.22-3.22l-.72-1.02a2.906,2.906,0,0,0-2.34-1.22h-.01l-23.57.06-.15-1.54a3.084,3.084,0,0,0-3.03-2.81H13.98a1,1,0,0,0,0,2h5.65a1.09,1.09,0,0,1,1.04,1.02l1.78,17.46-3.37,1.95a3.158,3.158,0,0,0-1.34,2.6v.28a3.113,3.113,0,0,0,2.83,3.13,4.653,4.653,0,0,0-.78,2.59,4.408,4.408,0,1,0,8.81,0,4.684,4.684,0,0,0-.77-2.57H36.9a4.6,4.6,0,0,0-.77,2.57,4.408,4.408,0,1,0,8.81,0,4.684,4.684,0,0,0-.77-2.57h1.81a1,1,0,0,0,0-2H20.79a1.107,1.107,0,0,1-1.05-1.15v-.28A1.211,1.211,0,0,1,20.15,42.89ZM42.24,38.3a.915.915,0,0,1-.79.5H24.41L23.38,28.66l23.96-.01Zm4.14-13.23h.01a.87.87,0,0,1,.71.38l.73,1.02c.03.05.06.11.09.17l-24.75.02-.15-1.53ZM40.53,47.24a2.581,2.581,0,1,1-2.4,2.57A2.494,2.494,0,0,1,40.53,47.24Zm-16.34,0a2.581,2.581,0,1,1-2.4,2.57A2.494,2.494,0,0,1,24.19,47.24Z"></path> </g> </g></svg>,
        name: "Торговля, электроника",
    },
    {
        icon: <svg className="mb-6 h-[80px] w-[80px] fill-Highlight" viewBox="0 0 48 48" id="Layer_1" version="1.1" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><style type="text/css">  </style><path  d="M41.5,7h-34C7.224,7,7,7.224,7,7.5v21.83c0,0.276,0.224,0.5,0.5,0.5h10.663l-2.605,8.918 c-0.144,0.492-0.087,1.01,0.16,1.459c0.246,0.449,0.653,0.775,1.145,0.917c0.177,0.052,0.356,0.076,0.533,0.076 c0.83,0,1.597-0.544,1.841-1.379l2.918-9.993h3.69l2.919,9.993c0.244,0.835,1.011,1.379,1.841,1.379 c0.176,0,0.355-0.024,0.533-0.076c0.492-0.143,0.899-0.468,1.145-0.917c0.247-0.449,0.304-0.967,0.16-1.459l-2.605-8.918H41.5 c0.276,0,0.5-0.224,0.5-0.5V7.5C42,7.224,41.776,7,41.5,7z M41,8v18.012H18.583V24c0-0.276-0.224-0.5-0.5-0.5H12 c-0.276,0-0.5,0.224-0.5,0.5v2.012H8V8H41z M17.583,26.012H12.5V24.5h5.083V26.012z M18.276,39.542 c-0.141,0.484-0.651,0.762-1.135,0.623c-0.235-0.068-0.429-0.224-0.547-0.439c-0.118-0.215-0.146-0.462-0.077-0.698l2.688-9.199 h1.908L18.276,39.542z M31.482,39.029c0.069,0.235,0.042,0.483-0.077,0.698c-0.118,0.215-0.312,0.371-0.547,0.439 c-0.484,0.137-0.995-0.139-1.135-0.623l-2.837-9.712h1.908L31.482,39.029z M29.17,28.83h-2.95h-4.44h-2.95H8v-1.818h4h6.083H41 v1.818H29.17z"></path></g></svg>,
        name: "Образование, обучение",
    },
    {
        icon: <svg className="mb-6 h-[80px] w-[80px] fill-Highlight" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css">  </style> <path d="M29.9,17.5C29.7,17.2,29.4,17,29,17c-2.2,0-4.3,1-5.6,2.8L22.5,21c-1.1,1.3-2.8,2-4.5,2h-3c-0.6,0-1-0.4-1-1s0.4-1,1-1h1.9 c1.6,0,3.1-1.3,3.1-2.9c0,0,0-0.1,0-0.1c0-0.5-0.5-1-1-1l-6.1,0c-3.6,0-6.5,1.6-8.1,4.2l-2.7,4.2c-0.2,0.3-0.2,0.7,0,1l3,5 c0.1,0.2,0.4,0.4,0.6,0.5c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2c3.8-2.5,8.2-3.8,12.7-3.8c3.3,0,6.3-1.8,7.9-4.7l2.7-4.8 C30,18.2,30,17.8,29.9,17.5z"></path> <path d="M12.9,15C12.9,15,12.9,15,12.9,15l6.1,0c1.6,0,3,1.3,3,2.9l0,0.2c0,0,0,0,0,0l6.2-6.4c2.4-2.5,2.4-6.4,0-8.9 C27,1.7,25.5,1,23.9,1c-1.6,0-3.2,0.7-4.4,1.9L19,3.4l-0.5-0.5C17.3,1.7,15.8,1,14.1,1C12.5,1,11,1.7,9.8,2.9 c-2.4,2.5-2.4,6.4,0,8.9L12.9,15z M14,9h1.6l1.7-1.7C17.5,7.1,17.8,7,18.2,7c0.3,0.1,0.6,0.3,0.7,0.5l1,2l1.2-2.9 C21.2,6.3,21.5,6,21.9,6c0.4,0,0.7,0.1,0.9,0.4l2,3c0.3,0.5,0.2,1.1-0.3,1.4c-0.5,0.3-1.1,0.2-1.4-0.3l-0.9-1.4l-1.3,3.2 C20.8,12.7,20.4,13,20,13c0,0,0,0,0,0c-0.4,0-0.7-0.2-0.9-0.6l-1.4-2.8l-1,1C16.5,10.9,16.3,11,16,11h-2c-0.6,0-1-0.4-1-1 S13.4,9,14,9z"></path> </g></svg>,
        name: "Здраво и фитнес",
    },
    {
        icon: <svg className="mb-6 h-[80px] w-[80px] fill-Highlight" viewBox="0 0 50 50" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg" overflow="inherit"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M14.237 39.5h30.483v-26.081h-30.483v26.081zm15.489-23.485l10.99 9.598h-2.769v11.516h-6.436v-8.129h-4.065v8.129h-6.096v-11.516h-2.84l11.216-9.598zm-18.876-9.031v-5.966h-6.774v48.982h6.774v-39.967h35.226v-3.049z"></path></g></svg>,
        name: "Недвижимость",
    },
    {
        icon: <svg className="mb-6 h-[80px] w-[80px] fill-Highlight" viewBox="0 -2.89 122.88 122.88" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"></style> <g> <path  d="M36.82,107.86L35.65,78.4l13.25-0.53c5.66,0.78,11.39,3.61,17.15,6.92l10.29-0.41c4.67,0.1,7.3,4.72,2.89,8 c-3.5,2.79-8.27,2.83-13.17,2.58c-3.37-0.03-3.34,4.5,0.17,4.37c1.22,0.05,2.54-0.29,3.69-0.34c6.09-0.25,11.06-1.61,13.94-6.55 l1.4-3.66l15.01-8.2c7.56-2.83,12.65,4.3,7.23,10.1c-10.77,8.51-21.2,16.27-32.62,22.09c-8.24,5.47-16.7,5.64-25.34,1.01 L36.82,107.86L36.82,107.86z M29.74,62.97h91.9c0.68,0,1.24,0.57,1.24,1.24v5.41c0,0.67-0.56,1.24-1.24,1.24h-91.9 c-0.68,0-1.24-0.56-1.24-1.24v-5.41C28.5,63.53,29.06,62.97,29.74,62.97L29.74,62.97z M79.26,11.23 c25.16,2.01,46.35,23.16,43.22,48.06l-93.57,0C25.82,34.23,47.09,13.05,72.43,11.2V7.14l-4,0c-0.7,0-1.28-0.58-1.28-1.28V1.28 c0-0.7,0.57-1.28,1.28-1.28h14.72c0.7,0,1.28,0.58,1.28,1.28v4.58c0,0.7-0.58,1.28-1.28,1.28h-3.89L79.26,11.23L79.26,11.23 L79.26,11.23z M0,77.39l31.55-1.66l1.4,35.25L1.4,112.63L0,77.39L0,77.39z"></path> </g> </g></svg>,
        name: "Питание, рестораны",
    },
    {
        icon: <svg className="mb-6 h-[80px] w-[80px] fill-Highlight" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 535.658 535.658" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M295.027,91.431c25.202,0,45.705-20.508,45.705-45.716C340.732,20.508,320.229,0,295.027,0 c-25.207,0-45.714,20.508-45.714,45.715C249.313,70.923,269.82,91.431,295.027,91.431z"></path> <path d="M164.08,279.878c2.674,0,5.183-1.036,7.064-2.917l32.96-32.959c1.881-1.882,2.917-4.391,2.917-7.064 s-1.036-5.183-2.917-7.064l-9.64-9.641c0.462-0.395,0.915-0.804,1.349-1.237c4.542-4.542,6.96-10.641,6.847-17.212 c1.874-1.243,3.539-2.814,4.896-4.664l15.702-21.41c2.268-3.092,7.515-8.369,10.593-10.655l1.253-0.93l-13.608,54.243 c-0.168,0.671-0.263,1.332-0.317,1.985l-11.245,47.8c-0.972,4.129-3.594,11.351-5.499,15.149l-27.289,54.338 c-2.446,4.871-2.849,10.402-1.135,15.576c1.714,5.174,5.341,9.371,10.212,11.816c2.723,1.368,5.638,2.098,8.665,2.169 c0.159,0.004,0.318,0.006,0.477,0.006c7.771,0,14.764-4.311,18.25-11.252l27.291-54.341c3.306-6.587,7.069-16.956,8.754-24.12 l10.925-46.439h18.93c0.009,0.008,0.016,0.017,0.025,0.023l26.137,22.702l-12.928,51.716c-2.728,10.916,3.933,22.017,14.849,24.746 c1.631,0.407,3.3,0.613,4.962,0.613c9.373-0.001,17.507-6.359,19.782-15.461l13.413-53.656c3.238-12.95-1.727-28.703-11.805-37.456 l-25.397-22.061l8.708-34.717c5.185,10.155,16.115,18.897,27.093,21.508l36.9,8.778c1.476,0.352,2.987,0.529,4.494,0.529 c8.993,0,16.729-6.118,18.814-14.878c2.469-10.382-3.968-20.838-14.349-23.308l-36.55-8.694c-0.545-0.279-1.606-1.151-1.984-1.632 l-17.931-39.223c-3.141-6.872-10.054-11.312-17.612-11.312c-0.279,0-53.171,0-53.171,0c-4.025,0-8.175,2.029-10.581,3.814 l-41.607,30.886c-6.15,4.565-14.204,12.667-18.734,18.845l-15.701,21.409c-0.418,0.57-0.795,1.162-1.146,1.766 c-5.936,0.292-11.422,2.689-15.558,6.825c-0.435,0.435-0.843,0.888-1.238,1.35l-9.64-9.64c-1.881-1.881-4.39-2.917-7.064-2.917 s-5.183,1.036-7.064,2.917l-32.959,32.96c-1.881,1.882-2.918,4.391-2.918,7.064s1.036,5.183,2.918,7.064l55.342,55.343 C158.897,278.842,161.406,279.878,164.08,279.878z M168.033,191.213c1.329-1.33,2.96-2.29,4.763-2.841 c0.011,0.082,0.013,0.163,0.025,0.244c0.786,5.109,3.515,9.607,7.684,12.665c2.95,2.163,6.375,3.423,9.979,3.69 c-0.482,2.144-1.517,4.083-3.063,5.629c-0.437,0.436-0.913,0.822-1.41,1.179l-19.156-19.156 C167.211,192.128,167.595,191.65,168.033,191.213z"></path> <path d="M436.9,402.838c0-4.763-3.577-8.77-8.318-9.321l-10.528-1.232c-1.563-5.163-3.71-10.115-6.395-14.746l6.565-8.258 c2.958-3.743,2.652-9.103-0.711-12.467l-13.186-13.188c-1.77-1.769-4.124-2.742-6.629-2.742c-2.107,0-4.181,0.722-5.84,2.033 l-8.798,6.967c-4.354-2.313-8.922-4.175-13.606-5.545l-1.3-11.249c-0.548-4.716-4.553-8.292-9.323-8.32H340.19 c-4.764,0-8.771,3.577-9.32,8.32l-1.298,11.152c-4.936,1.405-9.715,3.343-14.234,5.772l-8.968-7.099 c-1.658-1.31-3.732-2.031-5.839-2.031c-2.506,0-4.86,0.974-6.629,2.743l-13.189,13.188c-3.362,3.363-3.668,8.724-0.708,12.47 l6.815,8.595c-2.708,4.772-4.868,9.862-6.431,15.157l-10.764,1.254c-4.717,0.549-8.294,4.553-8.321,9.322l0.001,18.641 c0,4.766,3.578,8.772,8.317,9.319l10.578,1.253c1.498,5.311,3.567,10.361,6.161,15.042l-6.337,7.985 c-2.957,3.745-2.651,9.107,0.712,12.469l13.188,13.187c1.769,1.77,4.123,2.743,6.629,2.743c2.107,0,4.18-0.722,5.838-2.032 l7.868-6.222c4.589,2.591,9.531,4.676,14.716,6.21l1.144,9.817c0.546,4.716,4.548,8.292,9.318,8.32h18.598 c4.765,0,8.772-3.577,9.321-8.321l1.098-9.486c5.454-1.5,10.729-3.661,15.706-6.433l7.674,6.071 c1.658,1.309,3.732,2.031,5.839,2.031c2.507,0,4.861-0.975,6.629-2.744l13.188-13.186c3.364-3.364,3.67-8.724,0.711-12.467 l-6.069-7.673c2.848-5.102,5.055-10.54,6.571-16.193l9.876-1.142c4.714-0.546,8.292-4.549,8.322-9.321L436.9,402.838z M370.061,434.056c-5.53,5.53-12.898,8.576-20.749,8.576c-7.85,0-15.218-3.046-20.747-8.576c-5.53-5.53-8.576-12.897-8.576-20.747 c0-7.85,3.045-15.218,8.576-20.748c5.529-5.53,12.898-8.576,20.747-8.576c7.85,0,15.219,3.046,20.749,8.576 c5.53,5.53,8.576,12.899,8.576,20.748C378.637,421.158,375.591,428.525,370.061,434.056z"></path> <path d="M267.518,445.289c-0.417-4.993-4.503-8.862-9.498-9.001l-7.76-0.248c-1.706-4.22-3.865-8.248-6.431-12l4.25-6.428 c2.757-4.152,1.968-9.729-1.842-12.979l-10.434-8.797c-1.781-1.495-4.042-2.319-6.366-2.319c-2.51,0-4.897,0.944-6.723,2.657 l-6.023,5.65c-3.776-1.614-7.766-2.86-11.887-3.713l-1.663-8.19c-0.99-4.843-5.462-8.275-10.474-7.853l-13.59,1.146 c-4.992,0.418-8.861,4.505-8.998,9.498l-0.272,8.275c-4.114,1.574-8.002,3.548-11.581,5.881l-7.055-4.683 c-1.612-1.071-3.49-1.637-5.433-1.637c-2.912,0-5.66,1.265-7.547,3.477l-8.797,10.435c-3.216,3.83-3.07,9.457,0.337,13.087 l5.516,5.889c-1.936,4.238-3.396,8.69-4.351,13.265l-7.794,1.593c-4.893,1.001-8.268,5.502-7.851,10.472l1.146,13.592 c0.421,4.991,4.507,8.86,9.502,8.999l7.753,0.227c1.649,4.362,3.757,8.479,6.278,12.267l-4.07,6.156 c-2.758,4.151-1.97,9.729,1.842,12.98l10.435,8.796c1.782,1.496,4.043,2.32,6.367,2.32c2.509,0,4.896-0.944,6.72-2.657l5.283-4.956 c4.127,1.872,8.452,3.285,12.885,4.211l1.403,6.979c0.883,4.622,4.931,7.977,9.627,7.978h0.001c0.273,0,0.548-0.012,0.827-0.035 l13.587-1.147c4.991-0.417,8.862-4.503,9.002-9.496l0.222-6.813c4.482-1.654,8.792-3.859,12.835-6.567l5.872,3.882 c1.612,1.071,3.49,1.637,5.433,1.637c2.912,0,5.661-1.265,7.547-3.477l8.798-10.435c3.214-3.83,3.069-9.457-0.336-13.087 l-4.797-5.121c2.049-4.567,3.529-9.326,4.409-14.177l7.037-1.425c4.894-0.998,8.27-5.5,7.852-10.478L267.518,445.289z M211.407,475.701c-4.777,5.671-11.788,8.923-19.233,8.923c-5.93,0-11.684-2.106-16.206-5.933 c-5.13-4.32-8.268-10.393-8.834-17.097c-0.567-6.705,1.507-13.219,5.842-18.343c4.776-5.67,11.786-8.922,19.233-8.922 c5.929,0,11.684,2.106,16.206,5.932c5.13,4.322,8.267,10.396,8.833,17.101C217.815,464.066,215.741,470.578,211.407,475.701z"></path> </g> </g></svg>,
        name: "По требованию",
    },
  ]


const sectorsHtml = sectors.map((sector, index) => (
    <div key={index} className="bg-SecondaryBg bg-opacity-[0.12] rounded-2xl shadow-[4px_4px_4px_0px] shadow-Highlight lg:w-[15%] md:w-[30%] w-[45%] lg:aspect-square flex flex-col items-center p-2 pb-4 mb-6">
        {sector.icon}
        <h1 className="text-[#FFF] font-bold lg:text-xl 2xl:text-2xl text-center">{sector.name}</h1>
    </div>
));


const OurSectorsRu: React.FC = () => {
    return (
        <div className="bg-PrimaryBg w-full flex justify-around pt-6" >
            <div className="w-[90%] 2xl:w-[70%] ">

                <h1 className="text-[#FFF] font-bold text-3xl lg:text-4xl 2xl:text-6xl border-l-[5px] border-Highlight pl-4 mb-4">Обслуживание во всех секторах</h1>
                <p className="text-[#FFF] text-sm lg:text-base 2xl:text-lg pl-4 mb-8">В <span className="text-Highlight font-bold">ProTechies</span> мы гордимся своей способностью разрабатывать приложения для широкого спектра отраслей. Независимо от вашей сферы деятельности, у нас есть навыки и опыт, чтобы создать идеальное приложение, соответствующее вашим конкретным требованиям. От концепции до завершения, мы здесь, чтобы превратить ваше видение в реальность.</p>

                <div className="flex flex-wrap justify-between ">
                    {sectorsHtml}
                </div>
            </div>
        </div>
    )
}

export default OurSectorsRu