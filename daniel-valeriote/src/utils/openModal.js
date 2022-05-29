export default function openModal (modalRef, duration) {
	modalRef.value = true;
	if(duration && typeof(duration) === "number") setTimeout(() => isModalOpen.value = false, duration);
}