class ListPackageMeetingroomsController < ApplicationController
  before_action :set_list_package_meetingroom, only: %i[ show update destroy ]

  def index
    @list_package_meetingrooms = ListPackageMeetingroom.all

    render json: @list_package_meetingrooms
  end

  def show
    render json: @list_package_meetingroom
  end

  def create
    @list_package_meetingroom = ListPackageMeetingroom.new(list_package_meetingroom_params)

    if @list_package_meetingroom.save
      render json: @list_package_meetingroom
    else
      render json: @list_package_meetingroom.errors, status: :unprocessable_entity
    end
  end

  def update
    if @list_package_meetingroom.update(list_package_meetingroom_params)
      render json: @list_package_meetingroom
    else
      render json: @list_package_meetingroom.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @list_package_meetingroom.destroy
  end

  private
    def set_list_package_meetingroom
      @list_package_meetingroom = ListPackageMeetingroom.find(params[:id])
    end

    def list_package_meetingroom_params
      params.require(:list_package_meetingroom).permit(:packages_id, :meeting_rooms_id)
    end
end
