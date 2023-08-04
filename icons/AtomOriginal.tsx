export default function AtomOriginal({ w = 64, h = 64, ...props }) { return (<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width={w} height={h} {...props}><path fill-rule="evenodd" clip-rule="evenodd" fill="#67595D" d="M38.622 66.979c-.806 1.674-1.508 3.089-2.175 4.522-3.338 7.177-6.103 14.553-7.53 22.367-.794 4.346-1.228 8.724-.093 13.087.975 3.749 3.004 5.674 6.475 5.833 1.519.071 3.108-.251 4.587-.668 3.916-1.109 7.323-3.251 10.618-5.571.8-.564 1.618-.916 2.616-.545 1.768.658 2.408 3.002.917 4.115-5.381 4.009-11.076 7.466-18.049 7.68-5.711.176-9.845-2.887-11.667-8.331-1.36-4.062-1.44-8.24-.941-12.432 1.482-12.478 6.298-23.815 12.081-34.805.497-.944.527-1.694.175-2.703-1.444-4.147-2.787-8.33-4.106-12.519-.25-.794-.506-1.02-1.368-.831-5.666 1.246-11.248 2.767-16.274 5.744-1.941 1.15-3.803 2.578-5.355 4.208-2.581 2.71-2.63 5.709-.521 8.803 1.84 2.701 4.433 4.548 7.169 6.217.856.524 1.759.97 2.621 1.484 1.253.749 1.682 2.201 1.039 3.409-.645 1.209-2.092 1.688-3.406 1.012-3.844-1.976-7.429-4.321-10.304-7.611-1.762-2.016-3.053-4.282-3.48-6.968-.532-3.35.428-6.302 2.44-8.954 2.075-2.733 4.8-4.683 7.775-6.303 5.276-2.873 10.961-4.589 16.801-5.854.4-.087.796-.195 1.338-.33-.275-1.558-.57-3.07-.806-4.593-.957-6.194-1.398-12.393.123-18.567.602-2.442 1.547-4.75 3.191-6.695 3.356-3.967 7.672-4.85 12.512-3.668 4.784 1.169 8.801 3.818 12.547 6.901 1.06.872 1.089 2.447.224 3.462-.883 1.035-2.256 1.17-3.458.351-1.888-1.285-3.724-2.658-5.686-3.819-2.248-1.329-4.662-2.272-7.352-2.285-2.222-.011-3.949.893-5.215 2.693-1.604 2.283-2.177 4.917-2.48 7.618-.641 5.713.12 11.329 1.233 16.918.119.594.347.804.972.741 4.51-.45 9.021-.899 13.538-1.276.982-.081 1.623-.436 2.232-1.206 5.87-7.415 12.305-14.281 19.875-20.01 4.217-3.191 8.673-5.973 13.8-7.492 3.212-.951 6.463-1.303 9.698-.166 4.04 1.42 6.298 4.49 7.462 8.452 1.234 4.206 1.041 8.494.54 12.781a46.552 46.552 0 01-.528 3.277c-.281 1.478-1.377 2.261-2.853 2.089-1.342-.156-2.218-1.235-2.077-2.733.195-2.066.666-4.121.687-6.183.025-2.44-.027-4.943-.535-7.313-1.059-4.928-4.468-6.861-9.511-5.749-3.783.833-7.138 2.613-10.332 4.718-6.561 4.324-12.162 9.731-17.362 15.577-.967 1.087-1.897 2.208-2.837 3.318-.057.066-.053.184-.125.465h1.361c13.391.135 26.585 1.727 39.479 5.438 6.14 1.768 12.067 4.072 17.521 7.465 2.902 1.805 5.566 3.894 7.673 6.62 4.297 5.56 3.936 11.802-1.007 16.781-3.338 3.363-7.449 5.487-11.828 7.137-1.239.465-2.603-.218-3.077-1.405-.521-1.304.044-2.653 1.37-3.296 2.022-.98 4.125-1.829 6.037-2.993a21.078 21.078 0 004.347-3.499c2.677-2.849 2.776-5.963.506-9.151-1.7-2.388-3.984-4.134-6.44-5.66-6.06-3.766-12.71-6.099-19.557-7.92-7.138-1.899-14.39-3.224-21.755-3.748-5.869-.417-11.759-.537-17.639-.816-.849-.041-1.429.21-1.901.938-3.447 5.316-6.933 10.607-10.362 15.935-.25.388-.356 1.086-.185 1.497 5.805 13.814 13.157 26.708 22.9 38.155 4.102 4.817 8.563 9.272 13.98 12.643 2.542 1.581 5.195 2.9 8.272 3.105 2.788.188 4.822-.979 6.206-3.345 1.304-2.229 1.827-4.695 2.061-7.229.756-8.177-.861-16.064-3.005-23.87-2.196-7.996-5.304-15.654-8.865-23.136-.287-.602-.522-1.317-.491-1.965.057-1.179.987-2.018 2.15-2.2 1.022-.16 2.098.402 2.609 1.498 1.274 2.728 2.567 5.451 3.734 8.226 3.602 8.571 6.502 17.365 8.034 26.563 1.069 6.42 1.58 12.863.096 19.294a22.23 22.23 0 01-1.439 4.21c-2.527 5.524-7.651 8.02-13.588 6.722-4.827-1.057-8.901-3.579-12.702-6.592-6.991-5.541-12.663-12.297-17.793-19.535-5.848-8.245-10.787-17.013-14.925-26.234-.155-.343-.333-.676-.637-1.295zm-2.528-21.95l3.196 10.164c2.525-3.854 4.879-7.446 7.411-11.313l-10.607 1.149zm28.374 26.238c-4.017-.005-7.286-3.261-7.278-7.249.007-4.052 3.272-7.281 7.356-7.28 4.014.002 7.276 3.255 7.279 7.255.002 4.047-3.267 7.279-7.357 7.274z"/></svg>) }