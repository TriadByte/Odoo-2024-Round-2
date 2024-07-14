interface ReadingModes {
    text: boolean;
    image: boolean;
}

interface ImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

interface VolumeInfo {
    title: string;
    publishedDate: string;
    description: string;
    readingModes: ReadingModes;
    pageCount: number;
    printType: string;
    averageRating: number;
    ratingsCount: number;
    maturityRating: string;
    allowAnonLogging: boolean;
    contentVersion: string;
    imageLinks: ImageLinks;
    language: string;
    previewLink: string;
    infoLink: string;
    canonicalVolumeLink: string;
}

interface SaleInfo {
    country: string;
    saleability: string;
    isEbook: boolean;
}

interface Epub {
    isAvailable: boolean;
}

interface Pdf {
    isAvailable: boolean;
}

interface AccessInfo {
    country: string;
    viewability: string;
    embeddable: boolean;
    publicDomain: boolean;
    textToSpeechPermission: string;
    epub: Epub;
    pdf: Pdf;
    webReaderLink: string;
    accessViewStatus: string;
    quoteSharingAllowed: boolean;
}

interface SearchInfo {
    textSnippet: string;
}

interface Book {
    kind: string;
    id: string;
    etag: string;
    selfLink: string;
    volumeInfo: VolumeInfo;
    saleInfo: SaleInfo;
    accessInfo: AccessInfo;
    searchInfo: SearchInfo;
}

export default Book;
