import downloadButton from "/photos/downloadButton.jpg";

export default function DownloadBanner() {

    return (
        <div className="flex flex-col items-center p-5 border-2 border-dashed">
            <p className="text-2xl">See my resume in 3 easy steps!</p>
            <button className="">
                <img src={downloadButton} alt="downloadButton" className="h-32" />
            </button>
            <p className="text-2xl">1. Click the button to download my resume!</p>
            <p className="text-2xl">2. Download Adobe Acrobat Reader DC software</p>
            <p className="text-2xl">3. Enjoy!</p>
        </div>
    )
}