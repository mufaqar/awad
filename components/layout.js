import Link from 'next/link';
import React from 'react';

export default function Layout({ children }) {
    return (
        <main className="relative h-screen ">
            <div className="absolute z-20 flex justify-between w-auto h-screen overflow-hidden">
                <div className="relative z-10 py-6 pl-4 md:flex-shrink-0">
                    <svg className="md:h-full h-[50vh] w-auto" viewBox="0 0 54 352" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52.5964 335.287L43.8927 335.994L43.8946 341.05L52.5988 341.751L52.6024 351.351L1.40004 345.098L1.39519 331.978L52.5929 325.687L52.5964 335.287ZM34.2943 340.286L34.293 336.766L11.5736 338.502L34.2943 340.286ZM25.6418 306.617C27.5177 302.776 31.1864 300.855 36.6477 300.853L39.2717 300.852C44.093 300.85 47.5068 301.937 49.5129 304.112C51.519 306.245 52.5444 310.02 52.5891 315.439L52.5926 325.039L1.39263 325.058L1.38909 315.458C1.3871 310.082 2.40974 306.412 4.45701 304.449C6.46162 302.485 10.0879 301.502 15.3359 301.501L15.7839 301.5C20.6479 301.499 23.9339 303.204 25.6418 306.617ZM15.3395 311.101C13.4621 311.101 12.2676 311.358 11.7558 311.87C11.2439 312.382 10.9884 313.577 10.9891 315.454L21.4211 315.45C21.4204 313.573 21.1639 312.378 20.6518 311.867C20.0969 311.355 18.9021 311.099 17.0675 311.1L15.3395 311.101ZM42.9891 315.442C42.9884 313.522 42.7106 312.221 42.1556 311.539C41.6007 310.814 40.4272 310.451 38.6352 310.452L35.3712 310.453C33.5792 310.454 32.406 310.817 31.8516 311.542C31.2972 312.225 31.0204 313.527 31.0211 315.447L42.9891 315.442ZM1.37966 289.958C1.37764 284.496 2.42157 280.699 4.51144 278.565C6.55866 276.43 10.1636 275.362 15.3263 275.361L38.6223 275.352C43.7423 275.35 47.348 276.437 49.4395 278.612C51.5309 280.744 52.5777 284.52 52.5797 289.939L52.5832 299.539L1.38321 299.558L1.37966 289.958ZM42.9797 289.942C42.9789 288.022 42.7011 286.721 42.1462 286.039C41.5913 285.314 40.4178 284.951 38.6258 284.952L15.3298 284.961C13.5378 284.961 12.3646 285.324 11.8102 286.05C11.2558 286.733 10.9789 288.034 10.9797 289.954L42.9797 289.942ZM1.36488 249.994L38.6129 249.98C48.3409 249.976 53.2064 253.985 53.2093 262.007C53.2123 270.028 48.3498 274.04 38.6218 274.044L1.37378 274.058L1.37023 264.458L37.9782 264.444C40.2396 264.443 41.7542 264.293 42.5221 263.994C43.2473 263.696 43.6097 263.034 43.6093 262.01C43.609 260.986 43.246 260.325 42.5206 260.026C41.7525 259.728 40.2378 259.579 37.9764 259.58L1.36843 259.594L1.36488 249.994ZM42.9608 239.067L42.9577 230.427L52.5577 230.424L52.5644 248.664L1.3644 248.683L1.36085 239.083L42.9608 239.067ZM42.9536 219.567L42.9504 210.927L52.5504 210.924L52.5572 229.164L1.35719 229.183L1.35364 219.583L42.9536 219.567ZM52.544 193.6L43.8403 194.307L43.8422 199.363L52.5464 200.064L52.55 209.664L1.34766 203.411L1.34281 190.291L52.5405 184L52.544 193.6ZM34.2419 198.599L34.2406 195.079L11.5212 196.815L34.2419 198.599ZM1.33448 167.754L1.33093 158.154L52.5309 158.135L52.5345 167.735L31.7345 167.743L31.7367 173.759L52.5367 173.751L52.5403 183.351L1.34025 183.37L1.3367 173.77L22.1367 173.763L22.1345 167.747L1.33448 167.754ZM52.5247 141.412L43.821 142.12L43.8229 147.176L52.5271 147.876L52.5307 157.476L1.32837 151.223L1.32352 138.103L52.5212 131.812L52.5247 141.412ZM34.2226 146.411L34.2213 142.891L11.5019 144.627L34.2226 146.411ZM1.30764 95.1507L1.30362 84.2707L52.5069 93.0838L52.513 109.596L15.073 109.61L52.5149 114.652L52.521 131.164L1.32096 131.183L1.31741 121.583L41.8294 121.568L1.31561 116.719L1.30944 100.015L41.8214 99.9997L1.30764 95.1507ZM52.4993 72.6623L43.7956 73.3695L43.7975 78.4255L52.5017 79.1263L52.5053 88.7263L1.30295 82.4732L1.2981 69.3532L52.4958 63.0623L52.4993 72.6623ZM34.1972 77.6611L34.1959 74.1411L11.4765 75.8775L34.1972 77.6611ZM1.29199 52.8327C1.28997 47.3714 2.3339 43.5737 4.42378 41.4396C6.47099 39.3055 10.0759 38.2375 15.2386 38.2356L38.5346 38.2269C43.6546 38.2251 47.2603 39.3117 49.3518 41.4869C51.4433 43.6195 52.49 47.3951 52.492 52.8138L52.4955 62.4138L1.29554 62.4327L1.29199 52.8327ZM42.892 52.8173C42.8913 50.8973 42.6135 49.5961 42.0585 48.9136C41.5036 48.1885 40.3301 47.8263 38.5381 47.8269L15.2421 47.8356C13.4501 47.8362 12.2769 48.1993 11.7225 48.9249C11.1681 49.6077 10.8913 50.9092 10.892 52.8292L42.892 52.8173ZM51.7149 28.1461C52.6539 29.1271 53.1237 30.3429 53.1242 31.7936C53.1248 33.2442 52.6559 34.4604 51.7176 35.4421C50.7793 36.4238 49.5634 36.9149 48.0701 36.9154C46.4914 36.916 45.2326 36.4258 44.2936 35.4448C43.3545 34.4638 42.8848 33.248 42.8842 31.7973C42.8837 30.3467 43.3526 29.1305 44.2909 28.1488C45.2292 27.1671 46.4877 26.676 48.0663 26.6754C49.5597 26.6749 50.7758 27.1651 51.7149 28.1461ZM31.6153 18.3815C32.2974 16.8453 32.638 15.0958 32.6373 13.1331C32.6366 11.1705 32.2946 9.44259 31.6114 7.94951C30.9282 6.41376 30.0531 5.21942 28.9861 4.36648C27.9191 3.47087 26.6602 2.76734 25.2093 2.25587C23.7158 1.70176 22.2863 1.33962 20.9209 1.16946C19.5555 0.956628 18.1261 0.85049 16.6328 0.851042C15.1394 0.851594 13.7101 0.958789 12.3449 1.17263C10.9796 1.3438 9.57176 1.70699 8.1213 2.26219C6.62815 2.77474 5.34841 3.47921 4.28208 4.37561C3.21572 5.22934 2.3415 6.42433 1.6594 7.96058C0.977286 9.45416 0.636591 11.1823 0.637317 13.145C0.638042 15.1076 0.980023 16.8568 1.66326 18.3926C2.34648 19.8857 3.22158 21.08 4.28858 21.9756C5.35557 22.8285 6.63583 23.5321 8.12937 24.0862C9.58022 24.5977 10.9884 24.9598 12.3538 25.1726C13.7192 25.3428 15.1485 25.4276 16.6419 25.427C18.1352 25.4265 19.5645 25.3406 20.9298 25.1695C22.295 24.9556 23.7242 24.5924 25.2174 24.0799C26.6678 23.5247 27.9262 22.8202 28.9926 21.9665C30.0589 21.0701 30.9331 19.8751 31.6153 18.3815ZM28.5399 9.16664C29.1376 10.2758 29.4368 11.5983 29.4373 13.1343C29.4379 14.6703 29.1397 16.0144 28.5428 17.1666C27.9459 18.2762 27.2209 19.1511 26.3678 19.7914C25.472 20.4318 24.4269 20.9442 23.2323 21.3286C21.9952 21.7131 20.8646 21.9695 19.8406 22.0979C18.8167 22.1836 17.75 22.2266 16.6407 22.227C15.5313 22.2275 14.4647 22.1852 13.4406 22.1002C12.4166 21.9726 11.3072 21.717 10.1123 21.3335C8.87487 20.9499 7.82935 20.4383 6.97578 19.7986C6.07954 19.1589 5.33255 18.2846 4.73481 17.1754C4.13705 16.0237 3.83789 14.6798 3.83732 13.1438C3.83675 11.6078 4.13493 10.285 4.73185 9.17544C5.32876 8.02322 6.07509 7.12695 6.97086 6.48661C7.82395 5.8463 8.8691 5.33391 10.1063 4.94946C11.3008 4.56501 12.4101 4.32994 13.434 4.24423C14.458 4.11585 15.5246 4.05145 16.634 4.05104C17.7433 4.05063 18.81 4.11424 19.834 4.24186C20.8581 4.32681 21.9888 4.56106 23.2263 4.94461C24.4211 5.32816 25.4666 5.83978 26.3629 6.47945C27.2164 7.11913 27.9421 8.01486 28.5399 9.16664ZM23.551 17.8085L9.34305 17.8137L9.34139 13.3337C9.33997 9.49374 11.0459 7.57311 14.4593 7.57185C16.5499 7.57107 17.9795 8.23188 18.748 9.55426L23.5473 7.63249L23.5486 11.0885L19.5812 12.69L19.5819 14.61L23.5499 14.6085L23.551 17.8085ZM16.3819 14.6111L16.3814 13.3311C16.3808 11.6245 15.7404 10.7714 14.4604 10.7718C13.1804 10.7723 12.5408 11.6259 12.5414 13.3326L12.5419 14.6126L16.3819 14.6111Z" fill="#F0E6CC" />
                    </svg>
                </div>
            </div>
            <div className="relative">{children}</div>
            <div className="absolute top-0 right-0 overflow-hidden">
                <div className="pt-20 pb-16 w-auto">
                    <Link href="#"
                        className="text-[#F0E6CC] GroteskMedium text-[4.26vw] md:text-[1.38vw] leading-[1.2] tracking-[-0.02em] font-medium transform rotate-90 flex "
                    >
                        info@xxxxxx.com
                    </Link>
                </div>
            </div>
        </main>
    );
}
