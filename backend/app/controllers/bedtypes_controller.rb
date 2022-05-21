class BedtypesController < ApplicationController
  before_action :set_bedtype, only: %i[ show update destroy ]

  def index
    @bedtypes = Bedtype.all

    render json: @bedtypes
  end

  def show
    render json: @bedtype
  end

  def create
    @bedtype = Bedtype.new(bedtype_params)

    if @bedtype.save
      render json: @bedtype
    else
      render json: @bedtype.errors, status: :unprocessable_entity
    end
  end

  def update
    if @bedtype.update(bedtype_params)
      render json: @bedtype
    else
      render json: @bedtype.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @bedtype.destroy
  end

  private
    def set_bedtype
      @bedtype = Bedtype.find(params[:id])
    end

    def bedtype_params
      params.require(:bedtype).permit(:name, :size)
    end
end
