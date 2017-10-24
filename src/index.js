const defaultImageUrl = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAAD6CAMAAAC/MqoPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyNTg3YWFiMy0zY2IwLWJlNDktODc5Ni1lMThiMmExZjcxMzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0RFMENBMzI5OUI2MTFFNkI2QjhBQzZCNzRBNjI1QzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0RFMENBMzE5OUI2MTFFNkI2QjhBQzZCNzRBNjI1QzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6MjU4N2FhYjMtM2NiMC1iZTQ5LTg3OTYtZTE4YjJhMWY3MTM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjI1ODdhYWIzLTNjYjAtYmU0OS04Nzk2LWUxOGIyYTFmNzEzNCIv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'
const THUMB600 = '?imageMogr2/thumbnail/600x600',
    DOMAIN = 'https://images.cache.timepack.cn/',
    TEMPLATE_DOMAIN = 'http://template.cache.timepack.cn/',
    EMPTY = '';

class MCanvas {

    constructor() {
        this.boxWidth = window.innerWidth * 0.8;
        this.photo = null;
        this.layout = null;
        this.temp = null;
    }


    render(photo, layout, temp) {
        if (null != photo) {
            this.photo = photo;
        }

        if (null != layout) {
            this.layout = layout;
        }

        if (null != temp) {
            this.temp = temp;
        }

    }



    getter() {
        let that = this;
        return {
            template(i) {
                return that.getTemplateImage(i);
            },
            photo(a, b) {
                return that.getPhotoImage(a, b);
            },
            radio(i) {
                return that.getLayoutRadio(i);
            },
            rest() {
                return that.getRestCount();
            },
            pageRest(i) {
                return that.getRestCountByPage(i);
            }
        }
    }


    setter() {
        let that = this;
        return {
            editPageStyle(a, b, c, d) {
                return that.setEditorPageStyle(a, b, c, d);
            },
            photoStyle(a, b) {
                return that.setPhotoStyle(a, b);
            },
            groupImage(a) {
                that.fillImageByGroup(a);
            },
            listImage(a) {
                that.fillImageByList(a);
            },
            pageImage(a, b) {
                that.fillImageByPage(a, b);
            },
            indexImage(a, b, c) {
                that.fillImageByIndex(a, b, c);
            }

        }
    }

    operate() {
        let that = this;
        return {
            exchange(a, b, c) {
                return that.exchangeImage(a, b, c);
            },
            rotate(a, b) {
                return that.rotateImage(a, b);
            },
            zoom(a, b, c) {
                return that.zoomImage(a, b, c);
            },
            convert(a) {
                return that.convertObject2Array(a);
            },
            changeLayout(a) {
                return that.changeLayoutItem(a);
            }
        }
    }

    delete() {
        let that = this;
        return {
            image(a, b) {
                return that.deleteImageByIndex(a, b);
            }
        }
    }

    event() {
        let that = this;
        return {
            touchstart(a, b) {
                return that.touchStart(a, b);
            },
            touchmove(a, b, c, d) {
                that.touchMove(a, b, c, d);
            },
            touchend(a, b, c, d, e) {
                return that.touchEnd(a, b, c, d, e);
            }
        }
    }



    /**
     * 初始化相簿数据
     * @return {[type]} [description]
     */
    init() {
        let photoList = [];
        for (let i = 0, len = this.layout.length; i < len; i++) {
            let item = this.layout[i],
                page = {};
            page.list = [];
            page.size = null == item.area ? 0 : item.area.length;
            page.main = item.layoutStyle.main;
            page.sub = item.layoutStyle.sub;
            page.temp = item.id;
            page.wait = 0; //初始化待插入的位置为0
            page.bw = this.boxWidth;
            page.dpr = document.documentElement.getAttribute('data-dpr');
            for (let j = 0; j < page.size; j++) {
                let pageItem = this.getPhotoItemInitData(j);
                page.list.push(pageItem);
            }
            photoList.push(page);
        }
        this.photo = photoList;
    }

    /**
     * 跨设备兼容性处理
     * @return {[type]} [description]
     */
    compatable() {
        if (null == this.photo) return;
        let photoList = this.photo;
        for (let i = 0, len = photoList.length; i < len; i++) {
            let item = photoList[i];
            if (undefined != item.list) {
                let bw = item.bw,
                    deviceWidthRadio = this.boxWidth / bw;
                item.bw = this.boxWidth;
                for (let j = 0; j < item.list.length; j++) {
                    let listItem = item.list[j];
                    for (let key in listItem.location.position) {
                        let value = listItem.location.position[key];
                        listItem.location.position[key] = Number((value * deviceWidthRadio).toFixed(2));
                    }
                }
            }
        }
        this.photo = photoList;
    }

    /**
     * 从容器列表中获取模板的图片
     * @param  {[Number]} index [容器列表的下标]
     * @return {[String]}       [模板图片地址]
     */
    getTemplateImage(index) {
        if (null === this.layout) return EMPTY;
        let item = this.layout[index];
        if (undefined == item) return EMPTY;
        return item.pngImg + THUMB600;
    }

    /**
     * 从图片列表中获取用户图片,带旋转角度
     * @param  {[Number]} pageIndex  [页数下标]
     * @param  {[Number]} imageIndex [图片次数下标]
     * @return {[String]}            [用户图片地址]
     */
    getPhotoImage(pageIndex, imageIndex) {
        let currentPhoto = this.photo[pageIndex].list;
        if (undefined != currentPhoto) {
            let photo = currentPhoto[imageIndex];
            if (EMPTY == photo.key || photo.width == 0 || undefined == photo.key) {
                return insertSrc;
            } else {
                return encodeURI(DOMAIN + photo.key + THUMB600 + '/rotate/' + photo.degree);
            }
        }

        return EMPTY;
    }

    /**
     * 根据容器下标获取容器的长宽比
     * @param  {[Number]} pageIndex [容器的下标]
     * @return {[Number]}           [指定容器的长宽比]
     */
    getLayoutRadio(pageIndex) {
        if (null == this.layout) return 1;
        let container = this.layout[pageIndex];
        if (null == container || undefined == container) return 1;
        return container.tw / container.th;
    }

    /**
     * 获取指定页数空区域的数量(即未填充的数量)
     * @param  {[Number]} pageIndex [指定的页数]
     * @return {[Number]}           [未填充的数量]
     */
    getRestCountByPage(pageIndex) {
        let photoList = this.photo;
        let item = photoList[pageIndex],
            count = 0;
        if (undefined != item.list) {
            for (let i = 0, len = item.list.length; i < len; i++) {
                let listItem = item.list[i];
                if (listItem.key == EMPTY || listItem.key == null || listItem.key == undefined) {
                    count += 1;
                }
            }
        }
        return count;
    }

    /**
     * 获取整体未填充区域的数量
     * @return {[Number]}           [未填充的数量]
     */
    getRestCount() {
        let photoList = this.photo,
            count = 0;
        if (null == photoList) return count;
        for (let i = 0; i < photoList.length; i++) {
            let item = photoList[i];
            if (undefined != item.list) {
                for (let j = 0, len = item.list.length; j < len; j++) {
                    let listItem = item.list[j];
                    if (listItem.key == EMPTY || listItem.key == null || listItem.key == undefined) {
                        count += 1;
                    }
                }
            }
        }
        return count;
    }

    /**
     * 设置编辑页面样式
     * @param {[Number]} pageIndex  [页数]
     * @param {[Number]} imageIndex [图片位置]
     * @param {[Number]} editWidth  [编辑区域宽度]
     * @param {[Boolean]} editable   [是否可编辑]
     */
    setEditorPageStyle(pageIndex, imageIndex, editWidth, editable) {
        if (null == this.layout) return EMPTY;
        const layout = this.layout[pageIndex],
            area = layout.area[imageIndex],
            scale = layout.scale;
        //长宽比
        const wl_radio = layout.tw / layout.th;
        //容器长宽比
        const ar_radio = area.aw / area.ah;
        //缩放比
        const zoom_radio = layout.tw * scale / editWidth;
        //设置容器的样式
        let style = {
            position: 'absolute',
            width: (area.aw * scale / zoom_radio) + 'px',
            height: (area.ah * scale / zoom_radio) + 'px',
            left: (area.ax * scale / zoom_radio) + 'px',
            top: (area.ay * scale / zoom_radio) + 'px',
            overflow: 'hidden',
            zIndex: 100 + pageIndex,
            backgroundRepeat: 'no-repeat'
        };
        //判断是否有图片,有则进行插入操作,无则跳过
        if (!editable) {
            let currentPhotoObject = this.photo[pageIndex],
                currentPhoto = this.photo[pageIndex].list;
            const widthContrastRadio = editWidth / this.boxWidth;
            if (undefined != currentPhoto) {
                let photo = currentPhoto[imageIndex],
                    zoom = Number(photo.zoom == undefined ? 1 : photo.zoom);
                if (EMPTY == photo.key || photo.width == 0 || photo.key == undefined) { //暂无图片,显示默认图片
                    style.background = 'url(' + defaultImageUrl + ') center no-repeat';
                    style.backgroundPosition = "100% 100%";
                    style.backgroundSize = "100% 100%";
                } else { //有图片
                    let url = encodeURI(DOMAIN + photo.key + THUMB600 + '/rotate/' + photo.degree),
                        imageScaleWidth, imageScaleHight;
                    style.backgroundImage = 'url(' + url + ')';
                    style.backgroundPosition = (photo.location.position.left) * widthContrastRadio.toFixed(2) + 'px ' + (photo.location.position.top) * widthContrastRadio.toFixed(2) + 'px';
                    const im_radio = photo.width / photo.height; //图片的长宽比
                    if (ar_radio >= im_radio) { //容器长宽比大于图片的长宽比
                        imageScaleWidth = 100 * zoom + '%';
                        imageScaleHight = "auto";
                    } else {
                        imageScaleWidth = "auto";
                        imageScaleHight = 100 * zoom + '%';
                    }
                    style.backgroundSize = imageScaleWidth + ' ' + imageScaleHight;
                }
            }
        }
        return style;
    }

    /**
     * 设置图片样式
     * @param {[Number]} pageIndex  [页数]
     * @param {[Number]} imageIndex [图片位置]
     */
    setPhotoStyle(pageIndex, imageIndex) {
        const layout = this.layout[pageIndex],
            area = layout.area[imageIndex];
        //长宽比
        const wl_radio = layout.tw / layout.th;
        //容器长宽比
        const ar_radio = area.aw / area.ah;
        //缩放比
        const zoom_radio = layout.tw / this.boxWidth;
        let currentPhoto = this.photo[pageIndex].list;
        if (undefined != currentPhoto) {
            let photo = currentPhoto[imageIndex],
                imageScaleWidth, imageScaleHight,
                zoom = photo.zoom;
            let style = {
                position: 'absolute',
                left: photo.location.position.left.toFixed(2) + 'px',
                top: photo.location.position.top.toFixed(2) + 'px'
            };
            if (EMPTY == photo.key || photo.width == 0 || photo.key == undefined) {
                style.width = '100%';
                style.height = '100%';
            } else {
                const im_radio = photo.width / photo.height; //图片的长宽比
                if (ar_radio >= im_radio) {
                    imageScaleWidth = 100 * zoom + '%';
                    imageScaleHight = "auto";
                } else {
                    imageScaleWidth = "auto";
                    imageScaleHight = 100 * zoom + '%';
                }
                style.width = imageScaleWidth;
                style.height = imageScaleHight;
            }
            return style;
        }

        return EMPTY;
    }

    /**
     * 用jquery对象列表填充图片
     * @param  {[type]} $list [description]
     * @return {[type]}       [description]
     */
    fillImageByGroup($list) {
        let photoList = this.photo,
            index = 0; //index不得大于$list.length
        for (let i = 0; i < photoList.length; i++) {
            let item = photoList[i],
                m_list = item.list;
            if (undefined != m_list) {
                while (item.size > item.wait) {
                    if (index == $list.length) { //无图片可插入,直接退出
                        break;
                    }
                    let $image = $($list[index]).find('img');
                    m_list[item.wait] = this.fillImageData(i, item.wait, $image);
                    item.wait += 1;
                    index++;
                }
            }
        }
        this.photo = photoList;
    }

    /**
     * 用图片数据列表填充图片
     * @param  {[type]} imageList [description]
     * @return {[type]}           [description]
     */
    fillImageByList(imageList) {
        let photoList = this.photo,
            index = 0; //index不得大于$list.length
        for (let i = 0; i < photoList.length; i++) {
            let item = photoList[i],
                m_list = item.list;
            if (undefined != m_list) {
                while (item.size > item.wait) {
                    if (index == sortableList.length) { //无图片可插入,直接退出
                        break;
                    }
                    let sortItem = sortableList[index];
                    m_list[item.wait] = {
                        width: sortItem.width,
                        height: sortItem.height,
                        key: sortItem.key,
                        degree: sortItem.degree,
                        zoom: 1,
                        location: {
                            position: this.centeringImage(i, item.wait, sortItem.width, sortItem.height),
                            layoutIndex: Number(item.wait) + 1
                        }
                    }
                    item.wait += 1;
                    index++;
                }
            }
        }
        this.photo = photoList;
    }

    /**
     * 根据页数填充图片
     * @param  {[type]} $list [description]
     * @param  {[type]} page  [description]
     * @return {[type]}       [description]
     */
    fillImageByPage($list, page) {
        let photoList = this.photo,
            index = 0; //index不得大于$list.length
        let item = photoList[page],
            p_list = item.list;
        if (undefined != p_list) {
            while (item.size > item.wait) {
                if (index == $list.length) { //无图片可插入,直接退出
                    break;
                }
                let $image = $($list[index]).find('img');
                for (let i = 0, len = p_list.length; i < len; i++) {
                    if (p_list[i].key == '') {
                        p_list[i] = this.fillImageData(Number(page), i, $image);
                        break;
                    }
                }
                item.wait += 1;
                index++;
            }
        }
        this.photo = photoList;
        //TODO 临时temp-photo
    }

    /**
     * 单页内根据下标填充图片
     * @param  {[type]} list  [description]
     * @param  {[type]} page  [description]
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    fillImageByIndex(list, page, index) { //只有一张图片
        let $image = $(list[0]).find('img');
        let photoList = this.photo;
        let item = photoList[page],
            p_list = item.list;
        p_list[index] = this.fillImageData(Number(page), Number(index), $image);
        this.photo = photoList;
        //TODO 临时temp-photo
    }

    /**
     * 向图片列表中填充图片数据
     * @param  {[Number]} page       [description]
     * @param  {[Number]} imageIndex [description]
     * @param  {[Object]} $image     [description]
     * @return {[object]}            [description]
     */
    fillImageData(page, imageIndex, $image) {
        let width = $image.attr('data-width'),
            height = $image.attr('data-height'),
            degree = $image.attr('data-degree'),
            key = $image.attr('data-key');
        return {
            width: width,
            height: height,
            key: key,
            degree: degree,
            zoom: 1,
            location: {
                position: this.centeringImage(page, imageIndex, width, height),
                layoutIndex: Number(imageIndex) + 1
            }
        }
    }

    /**
     * 图片居中处理
     * @param  {[Number]} page  [页数]
     * @param  {[Number]} index [图片位置]
     * @param  {[Number]} iw    [图片宽度]
     * @param  {[Number]} ih    [图片高度]
     * @return {[Object]}       [图片位置信息]
     */
    centeringImage(page, index, iw, ih) {
        let layout = this.layout[page];
        let area = layout.area[index];
        let position = {};
        if (undefined != area) {
            const ar_radio = area.aw / area.ah;
            const zoom_radio = layout.tw / this.boxWidth;
            const im_radio = iw / ih; //图片的长宽比
            if (ar_radio >= im_radio) {
                let scaleWidthRadio = (area.aw / zoom_radio) / iw;
                position = {
                    maxTop: 0,
                    minTop: -(ih * scaleWidthRadio - area.ah / zoom_radio).toFixed(2),
                    left: 0,
                    top: -((ih * scaleWidthRadio - area.ah / zoom_radio) / 2).toFixed(2)
                }
            } else {
                let scaleHeightRadio = (area.ah / zoom_radio) / ih;
                position = {
                    maxLeft: 0,
                    minLeft: -(iw * scaleHeightRadio - area.aw / zoom_radio).toFixed(2),
                    left: -((iw * scaleHeightRadio - area.aw / zoom_radio) / 2).toFixed(2),
                    top: 0
                }
            }
            return position;
        }
        return position;
    }

    /**
     * 根据下标删除图片
     * @param  {[Number]} page  [description]
     * @param  {[Number]} index [description]
     */
    deleteImageByIndex(page, index) {
        let empty_item = this.getPhotoItemInitData(index);
        let photoList = this.photo;
        let item = photoList[page],
            p_list = item.list;
        //插入序列减一
        if (item.wait > 0) {
            item.wait -= 1;
        }
        p_list[index] = empty_item;
        this.photo = photoList;
        return item;
    }

    /**
     * 更换图片间顺序
     * @param  {[Number]} pageIndex    [页数]
     * @param  {[Number]} lastIndex    [待替换下标]
     * @param  {[Number]} currentIndex [当前下标]
     * @return {[type]}              [description]
     */
    exchangeImage(pageIndex, lastIndex, currentIndex) {
        let photoList = this.photo;
        let item = photoList[pageIndex],
            p_list = item.list;
        let lastImage = p_list[lastIndex],
            currentImage = p_list[currentIndex];
        //互换位置,缩放比例还原为1
        p_list[lastIndex] = currentImage;
        p_list[lastIndex].zoom = 1;
        p_list[lastIndex].location = {
            layoutIndex: Number(lastIndex) + 1,
            position: this.centeringImage(pageIndex, lastIndex, currentImage.width, currentImage.height)
        }
        p_list[currentIndex] = lastImage;
        p_list[currentIndex].zoom = 1;
        p_list[currentIndex].location = {
            layoutIndex: Number(currentIndex) + 1,
            position: this.centeringImage(pageIndex, currentIndex, lastImage.width, lastImage.height)
        }
        this.photo = photoList;
        return item;
    }

    /**
     * 旋转图片
     * @param  {[type]} pageIndex  [description]
     * @param  {[type]} imageIndex [description]
     * @return {[type]}            [description]
     */
    rotateImage(pageIndex, imageIndex) {
        let photoList = this.photo;
        let currentPhoto = photoList[pageIndex];
        if (undefined != currentPhoto.list) {
            let item = currentPhoto.list[imageIndex],
                width = item.width,
                height = item.height,
                degree = item.degree;
            item.degree = (Number(degree) + 90) % 360;
            item.zoom = 1; //缩放重置为0
            item.width = height;
            item.height = width;
            item.location.position = this.centeringImage(pageIndex, imageIndex, item.width, item.height);
        }
        this.photo = photoList;
        return currentPhoto;
    }

    /**
     * 放大或缩小图片
     * @param  {[type]} page  [description]
     * @param  {[type]} index [description]
     * @param  {[type]} type  [description]
     * @return {[type]}       [description]
     */
    zoomImage(page, index, type) {
        let currentPage = this.reCalMovingLimit(page, index, type);
        if (null === currentPage) return null;
        let position = currentPage.location.position;
        let zoomW, zoomH;
        if (position.dir === 'V') {
            zoomW = currentPage.zoom * 100 + '%';
            zoomH = 'auto';
        } else if (position.dir === 'L') {
            zoomH = currentPage.zoom * 100 + '%';
            zoomW = 'auto';
        }
        return {
            position: 'absolute',
            left: position.left,
            top: position.top,
            width: zoomW,
            height: zoomH
        }
    }

    /**
     * 重新计算图片拖动限制
     * @param  {[type]} page  [description]
     * @param  {[type]} index [description]
     * @param  {[type]} type  [description]
     * @return {[type]}       [description]
     */
    reCalMovingLimit(page, index, type) {
        let photoList = this.photo;
        let currentPage = photoList[page].list[index];
        if (type === 1) {
            if (currentPage.zoom >= 2) {
                return null;
            }
            currentPage.zoom = (currentPage.zoom * 100 + 20) / 100;
        }

        if (type === 0) {
            if (currentPage.zoom <= 1) {
                return null;
            }
            currentPage.zoom = (currentPage.zoom * 100 - 20) / 100;
        }
        //缩放系数变化比
        let zoomRate = type === 1 ? 1.2 : 0.8;
        //获取相关容器
        var currentLayout = this.layout[page];
        let area = currentLayout.area[index];
        let position = {};
        const ar_radio = area.aw / area.ah;
        const zoom_radio = currentLayout.tw / this.boxWidth;
        const im_radio = currentPage.width / currentPage.height //图片的长宽比
        if (ar_radio >= im_radio) {
            let scaleWidthRadio = (area.aw / zoom_radio) * currentPage.zoom / Number(currentPage.width),
                maxTop = 0,
                minTop = -Number((currentPage.height * scaleWidthRadio - area.ah / zoom_radio).toFixed(2)),
                maxLeft = 0,
                minLeft = -Number((currentPage.width * scaleWidthRadio - area.aw / zoom_radio).toFixed(2)),
                zoomWidthStep = type === 1 ? -Number(area.aw / zoom_radio * 0.1) : (area.aw / zoom_radio * 0.1),
                zoomHeightStep = zoomWidthStep / im_radio,
                left = currentPage.location.position.left + zoomWidthStep,
                top = currentPage.location.position.top + zoomHeightStep;
            position = {
                dir: 'V', //垂直方向拖拽
                maxTop: maxTop,
                minTop: minTop,
                maxLeft: maxLeft,
                minLeft: minLeft,
                left: (left >= maxLeft) ? maxLeft : (left <= minLeft) ? minLeft : left,
                top: (top >= maxTop) ? maxTop : (top <= minTop) ? minTop : top
            }
        } else {
            let scaleHeightRadio = (area.ah / zoom_radio) * currentPage.zoom / Number(currentPage.height),
                maxLeft = 0,
                minLeft = -Number((Number(currentPage.width) * scaleHeightRadio - area.aw / zoom_radio).toFixed(2)),
                maxTop = 0,
                minTop = -Number((Number(currentPage.height) * scaleHeightRadio - area.ah / zoom_radio).toFixed(2)),
                zoomHeightStep = type === 1 ? -Number(area.ah / zoom_radio * 0.1) : (area.ah / zoom_radio * 0.1),
                zoomWidthStep = zoomHeightStep * im_radio,
                left = currentPage.location.position.left + zoomWidthStep,
                top = currentPage.location.position.top + zoomHeightStep;
            position = {
                dir: 'L', //水平方向拖拽
                maxLeft: maxLeft,
                minLeft: minLeft,
                maxTop: maxTop,
                minTop: minTop,
                left: (left >= maxLeft) ? maxLeft : (left <= minLeft) ? minLeft : left,
                top: (top >= maxTop) ? maxTop : (top <= minTop) ? minTop : top
            }
        }
        currentPage.location.position = position;
        this.photo = photoList;
        return currentPage;
    }

    /**
     * 开始拖拽
     * @param  {[type]} e      [description]
     * @param  {[type]} target [description]
     * @return {[type]}        [description]
     */
    touchStart(e, target) {
        if (e.targetTouches.length === 1) {
            let $edit = $('.edit')[0];
            let touch = e.targetTouches[0],
                image = target === undefined ? e.target : target;
            return {
                x: touch.pageX - $edit.offsetLeft,
                y: touch.pageY - $edit.offsetTop,
                ix: image.offsetLeft,
                iy: image.offsetTop
            };
        }
    }

    /**
     * 拖拽移动事件
     * @param e
     * @param startPosition
     * @param position
     */
    touchMove(e, startPosition, position, target) {
        if (e.targetTouches.length == 1) {
            if (undefined == startPosition) return;
            let touch = e.targetTouches[0],
                image = undefined === target ? e.target : target,
                $edit = $('.edit')[0];
            let evx = touch.pageX - $edit.offsetLeft,
                evy = touch.pageY - $edit.offsetLeft;
            let spanX = evx - startPosition.x,
                spanY = evy - startPosition.y;
            let currentLeft = $(image).position().left,
                currentTop = $(image).position().top,
                zoom = Number($(image).attr('data-zoom'));
            //未缩放图片保持拖拽限制
            if (zoom === 1) {
                if (image.style.height == 'auto') {
                    if (currentTop >= position.minTop - 10 && currentTop <= position.maxTop + 10) {
                        $(image).css({
                            top: startPosition.iy + spanY
                        })
                    }
                } else if (image.style.width == 'auto') {
                    if (currentLeft >= position.minLeft - 10 && currentLeft <= position.maxLeft + 10) {
                        $(image).css({
                            left: startPosition.ix + spanX
                        })
                    }
                }
            } else {
                //缩放过会的图片可左右拖动
                $(image).css({
                    top: startPosition.iy + spanY,
                    left: startPosition.ix + spanX
                })
            }

        }
    }

    /**
     *
     * @param e
     * @param page
     * @param index
     * @param position
     * @param target
     */
    touchEnd(e, page, index, position, target) {
        let image = undefined == target ? e.target : target;
        let zoom = Number($(image).attr('data-zoom')),
            currentPosition = $(image).position();
        if (zoom === 1) {
            if (image.style.height == 'auto') {
                if (position.maxTop >= position.minTop) {
                    if (currentPosition.top >= position.maxTop) {
                        $(image).css({
                            top: position.maxTop
                        });
                    } else if (currentPosition.top <= position.minTop) {
                        $(image).css({
                            top: position.minTop
                        });
                    }
                } else {}

            } else if (image.style.width == 'auto') {
                if (position.maxLeft >= position.minLeft) {
                    if (currentPosition.left >= position.maxLeft) {
                        $(image).css({
                            left: position.maxLeft
                        });
                    } else if (currentPosition.left <= position.minLeft) {
                        $(image).css({
                            left: position.minLeft
                        });
                    }
                } else {}

            }
        } else {
            if (position.maxLeft >= position.minLeft && position.maxTop >= position.minTop) {
                $(image).css({
                    left: currentPosition.left >= position.maxLeft ? position.maxLeft : currentPosition.left <= position.minLeft ? position.minLeft : currentPosition.left,
                    top: currentPosition.top >= position.maxTop ? position.maxTop : currentPosition.top <= position.minTop ? position.minTop : currentPosition.top
                });
            } else {}
        }

        this.cachePhotoAfterMoving($(image), page, index);
        return true;
    }

    /**
     * 即时缓存拖拽数据
     * @param $image
     * @param page
     * @param index
     */
    cachePhotoAfterMoving($image, page, index) {
        let photoList = this.photo;
        let list = photoList[page].list;
        let position = $image.position();
        list[index].location.position.left = position.left;
        list[index].location.position.top = position.top;
        this.photo = photoList;
    }

    /**
     * 将图片对象转换为数组
     * @param  {[type]} $list [description]
     * @return {[type]}       [description]
     */
    convertObject2Array($list) {
        let group = [];
        $list.each(function() {
            let $image = $(this).find('img');
            let width = $image.attr('data-width'),
                height = $image.attr('data-height'),
                degree = $image.attr('data-degree'),
                key = $image.attr('data-key');
            group.push({
                width: width,
                height: height,
                key: key,
                degree: degree
            });
        });
        return group;
    }

    /**
     * 修改容器模板
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    changeLayoutItem(index) {
        let photoList = this.photo;
        //缓存当前的图片模板-保证只缓存一个当前页
        if (null == this.temp) {
            this.temp = photoList[index];
        }
        let currentLayout = this.layout[index];
        let page = {};
        page.list = [];
        page.size = currentLayout.area.length;
        page.temp = currentLayout.id;
        page.bw = this.boxWidth;
        page.dpr = document.documentElement.getAttribute('data-dpr');
        page.main = currentLayout.layoutStyle.main;
        page.sub = currentLayout.layoutStyle.sub;
        page.wait = 0; //初始化待插入的位置为0
        for (let j = 0; j < page.size; j++) {
            let pageItem = this.getPhotoItemInitData(j);
            page.list.push(pageItem);
        }
        photoList[index] = this.updatePhotoContent(index, page);
        this.photo = photoList;
        return page;
    }

    /**
     * 更新容器内图片数据
     * @param  {[type]} pageIndex [description]
     * @param  {[type]} photoObj  [description]
     * @return {[type]}           [description]
     */
    updatePhotoContent(pageIndex, photoObj) {
        if (undefined == photoObj.list) return;
        let cachePhoto = this.temp;
        let list = cachePhoto.list;
        for (let i = 0; i < list.length; i++) {
            let item = list[i],
                pageItem = photoObj.list[i];
            if (item.key != EMPTY && undefined != pageItem) {
                photoObj.list[i] = {
                    width: item.width,
                    height: item.height,
                    key: item.key,
                    degree: item.degree,
                    zoom: 1,
                    location: {
                        position: this.centeringImage(pageIndex, i, item.width, item.height),
                        layoutIndex: i + 1
                    }
                };
                photoObj.wait += 1;
            }
        }
        return photoObj;
    }

    /**
     * 照片列表单项初始数据
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    getPhotoItemInitData(index) {
        return {
            width: 0,
            height: 0,
            key: '',
            degree: 0,
            zoom: 1,
            location: {
                position: {
                    left: 0,
                    top: 0
                },
                layoutIndex: Number(index) + 1
            }
        }
    }
}


export default new MCanvas();